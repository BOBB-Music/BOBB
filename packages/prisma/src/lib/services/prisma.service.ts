import {
	Injectable,
	Logger,
	OnApplicationShutdown,
	OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnApplicationShutdown
{
	private readonly _logger = new Logger(PrismaService.name);

	async onModuleInit() {
		await this.$connect();
		this._logger.log(`Prisma Connected`);
	}

	async onApplicationShutdown() {
		console.log(`Disconnecting Prisma`);
		await this.$disconnect();
	}
}
