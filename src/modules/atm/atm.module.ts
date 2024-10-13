import { Module } from '@nestjs/common';
import { AccountsResolver } from './infrastructure/account.resolver';
import { AccountsService } from './services/accounts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './models/account.schema';
import { AtmResolver } from './infrastructure/atm.resolver';
import { AtmService } from './services/atm.service';
import { Card, CardSchema } from './models/card.schema';
import { Transaction, TransactionSchema } from './models/transaction.schema';

@Module({
  providers: [AccountsResolver, AccountsService, AtmResolver, AtmService],
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  exports: [AccountsService, AtmService],
})
export class AtmModule {}
