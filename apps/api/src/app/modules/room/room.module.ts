import { PrismaModule } from '@bobb/prisma';
import { Module } from '@nestjs/common';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
	imports: [PrismaModule],
	providers: [RoomService, RoomResolver],
})
export class RoomModule {}
