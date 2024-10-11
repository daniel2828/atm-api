import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsDecimal } from 'class-validator';
@InputType()
export class CreateAccountDto {
  @IsNotEmpty()
  @Field()
  userId: number;
  @Field()
  @IsDecimal()
  balance: number;
  @Field()
  @IsNotEmpty()
  accountType: string; // "SAVINGS" o "CHECKING"
}
