import { PrismaModule } from '@bobb/prisma';
import { Module } from '@nestjs/common';
import { RoomResolver } from './room.resolver';

@Module({
	imports: [PrismaModule],
	controllers: [],
	providers: [RoomResolver],
})
export class RoomModule {}
