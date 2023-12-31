/**
 * This is not a production api yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

import fastifyCors from '@fastify/cors';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	app.register(fastifyCors, {
		origin:
			process.env.NODE_ENV === 'production' ? 'https://bobb.app' : true,
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Accept',
			'Content-Type',
			'Authorization',
		],
		methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
	});

	const port = process.env.PORT || 3000;
	await app.listen(port, '0.0.0.0');
	Logger.log(`🚀 Application is running on: http://0.0.0.0:${port}/`);
}

bootstrap();
