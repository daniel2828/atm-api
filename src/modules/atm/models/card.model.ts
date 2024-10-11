import { Field, ObjectType } from '@nestjs/graphql';
import { Account } from './account.schema';

@ObjectType()
export class Card {
  cardNumber: string;

  pinHash: string;

  isActivated: boolean;

  limit: number;

  @Field(() => Account)
  account: Account;
}
