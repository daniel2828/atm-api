import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class UpdateCardDto {
  @IsNotEmpty()
  @Field()
  cardId: string;

  isActivated?: boolean;
}
