import { Field, ObjectType } from '@nestjs/graphql';
import { Transaction } from './transaction.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@ObjectType()
@Schema()
export class Account {
  @Prop()
  @Field()
  id: number;
  @Prop()
  @Field()
  iban: string;
  @Prop()
  @Field()
  balance: number;
  @Prop()
  @Field()
  accountType: 'DEBIT' | 'CREDIT';
  @Prop()
  @Field()
  maxCredit: number;
  @Prop()
  @Field(() => [Transaction])
  transactions: Transaction[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
