import { Field, ObjectType } from '@nestjs/graphql';
import { Transaction } from './transaction.model';
import { AccountType } from './domain.enums';

@ObjectType()
export class Account {
  iban: string;

  balance: number;

  accountType: AccountType;

  maxCredit: number; // Para tarjetas de crédito

  @Field(() => [Transaction])
  transactions: Transaction[];
}
