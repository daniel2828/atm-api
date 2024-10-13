import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { Card } from '../models/card.schema';
import { CreateCardDto } from '../interfaces/createCard.dto';
import { AtmService } from '../services/atm.service';
import { Account } from '../models/account.schema';
import { TransactionDto } from '../interfaces/transaction.dto';

@Resolver('ATM')
export class AtmResolver {
  constructor(private readonly atmService: AtmService) {}

  @Mutation(() => Card)
  createCard(@Args('createCardDto') createCardDto: CreateCardDto) {
    return this.atmService.createCard(createCardDto);
  }

  @Mutation(() => Card)
  activateCard(@Args('cardId') cardId: string) {
    return this.atmService.updateCard({
      cardId: cardId,
      isActivated: true,
    });
  }

  @Mutation(() => Account)
  deposit(@Args('transactionDto') transactionDto: TransactionDto) {
    return this.atmService.deposit(transactionDto);
  }

  @Mutation(() => Account)
  withdrawal(@Args('transactionDto') transactionDto: TransactionDto) {
    return this.atmService.withdrawal(transactionDto);
  }
}
