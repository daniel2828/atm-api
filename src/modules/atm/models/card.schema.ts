import { Field, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CardDocument = HydratedDocument<Card>;
@Schema()
@ObjectType()
export class Card {
  @Prop()
  @Field()
  cardNumber: string;
  @Prop()
  @Field()
  pinHash: string;
  @Prop()
  @Field()
  isActivated: boolean;
  @Prop()
  @Field()
  limit: number;
  @Prop()
  @Field()
  accountId: string;
}
export const CardSchema = SchemaFactory.createForClass(Card);
