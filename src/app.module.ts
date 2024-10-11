import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloConfiguredModule } from './shared/configured-apollo.module';

@Module({
  imports: [ApolloConfiguredModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
