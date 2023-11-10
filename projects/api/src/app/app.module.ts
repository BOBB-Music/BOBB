import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

import { join } from 'path';

import { PrismaModule } from '@bobb/prisma';
import { RoomModule } from './modules/room/room.module';

@Module({
	imports: [
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			graphiql: true,
			autoSchemaFile: join(
				process.cwd(),
				'packages/graphql/src/lib/schema.gql',
			),
		}),

		PrismaModule,

		// api modules
		RoomModule,
	],
})
export class AppModule {}
