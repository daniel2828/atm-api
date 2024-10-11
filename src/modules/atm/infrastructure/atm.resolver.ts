// import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { AtmService } from '../application/services/atm.service';
// import { CreateAccountDto } from './dtos/create-account.dto';
// import { CreateCardDto } from './dtos/create-card.dto';

// @Resolver('ATM')
// export class AtmResolver {
//   constructor(private readonly atmService: AtmService) {}

//   //   @Mutation(() => Account)
//   //   createAccount(@Args('createAccountDto') createAccountDto: CreateAccountDto) {
//   //     return this.atmService.createAccount(createAccountDto);
//   //   }

//   @Mutation(() => Card)
//   createCard(@Args('createCardDto') createCardDto: CreateCardDto) {
//     return this.atmService.createCard(createCardDto);
//   }

//   //   @Query(() => [Transaction])
//   //   getTransactions(@Args('accountId') accountId: number) {
//   //     return this.atmService.getTransactions(accountId);
//   //   }
// }
