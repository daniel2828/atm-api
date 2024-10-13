import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../interfaces/createAccount.dto';
import { Account } from '../models/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBAN } from 'ibankit';
import { GraphQLError } from 'graphql';
import { Transaction } from '../models/transaction.schema';
import { TransactionType } from '../models/models.enums';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}
  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    if (IBAN.isValid(createAccountDto.iban)) {
      const createdAccount = new this.accountModel({
        ...createAccountDto,
        maxCredit: 6000,
      });
      await createdAccount.save();
      return createdAccount;
    } else {
      throw new GraphQLError('Not valid iban');
    }
  }

  async getAccountById(id: string): Promise<Account> {
    return await this.accountModel.findById(id).exec();
  }

  async addCardToAccount(id: string, cardId: string): Promise<Account> {
    return await this.accountModel
      .findByIdAndUpdate(id, { $push: { cardIds: cardId } }, { new: true })
      .exec();
  }

  async addTransactionToAccount(
    id: string,
    quantity: number,
    type: TransactionType,
  ): Promise<Account> {
    const transaction = new this.transactionModel({
      type,
      amount: quantity,
      date: new Date(),
    });

    let updateOperation;

    switch (type) {
      case TransactionType.WITHDRAWAL:
        updateOperation = { $inc: { balance: -quantity } };
        break;
      case TransactionType.DEPOSIT:
        updateOperation = { $inc: { balance: quantity } };
        break;
      // Puedes agregar más casos aquí si es necesario
      default:
        throw new Error(`Unsupported transaction type: ${type}`);
    }

    return await this.accountModel
      .findByIdAndUpdate(
        id,
        {
          ...updateOperation,
          $push: { transactions: transaction },
        },
        { new: true },
      )
      .exec();
  }
}
