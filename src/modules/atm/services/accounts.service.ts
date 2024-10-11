import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../interfaces/createAccount.dto';
import { Account } from '../models/account.schema';

@Injectable()
export class AccountsService {
  constructor() {}
  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    // const createdAccount = new AccountModel(createAccountDto);
    // return createdAccount;
  }

  // async getTransactions(accountId: number): Promise<Transaction[]> {}
}
