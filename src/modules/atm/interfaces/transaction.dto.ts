import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class TransactionDto {
  @IsNotEmpty()
  @Field()
  cardId: string;

  @Field()
  quantity: number;
}
