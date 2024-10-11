import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Account } from '../models/account.schema';
import { AccountsService } from '../services/accounts.service';
import { CreateAccountDto } from '../interfaces/createAccount.dto';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => Account)
  async createAccount(
    @Args('createAccountDto') createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    return await this.accountsService.createAccount(createAccountDto);
  }

  @Query(() => Account, { name: 'account' })
  async getAccount(
    @Args('getAccountDto') getAccountDto: string,
  ): Promise<Account> {
    return null;
    //return await this.accountsService.createAccount(createAccountDto);
  }
}
