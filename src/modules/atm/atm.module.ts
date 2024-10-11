import { Module } from '@nestjs/common';
import { AccountsResolver } from './infrastructure/account.resolver';
import { AccountsService } from './services/accounts.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Account, AccountSchema } from './models/account.schema';

@Module({
  providers: [AccountsResolver, AccountsService],
  imports: [
    // MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  exports: [AccountsService],
})
export class AtmModule {}
