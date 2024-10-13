import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class CreateCardDto {
  @IsNotEmpty()
  @Field()
  accountId: string;
}
