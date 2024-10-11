import { Field, ObjectType } from '@nestjs/graphql';
import { TransactionType } from './domain.enums';

@ObjectType()
export class Transaction {
  id: number;

  type: TransactionType;

  amount: number;

  @Field()
  date: Date;
}
