import { Module } from '@nestjs/common';
import { ApolloConfiguredModule } from './modules/shared/configured-apollo.module';
import { AtmModule } from './modules/atm/atm.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/atm'), ApolloConfiguredModule, AtmModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
