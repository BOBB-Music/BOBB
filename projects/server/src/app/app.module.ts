import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
