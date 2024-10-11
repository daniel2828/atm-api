import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),

      driver: ApolloDriver,
    }),
  ],
})
export class ApolloConfiguredModule {}
