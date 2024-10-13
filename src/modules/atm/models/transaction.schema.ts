import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TransactionType } from './models.enums';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Transaction extends Document {
  @Field(() => TransactionType)
  @Prop({ required: true })
  type: TransactionType;

  @Field()
  @Prop({ required: true })
  amount: number;

  @Field()
  @Prop({ default: Date.now })
  date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
