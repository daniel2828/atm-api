import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field()
  id: number;
  @Field()
  type: 'WITHDRAWAL' | 'DEPOSIT' | 'TRANSFER_IN' | 'TRANSFER_OUT' | 'FEE';
  @Field()
  amount: number;

  @Field()
  date: Date;
}
