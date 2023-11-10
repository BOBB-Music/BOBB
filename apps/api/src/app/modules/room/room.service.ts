import { FindManyRoomArgs, PrismaService } from '@bobb/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
	constructor(private _prisma: PrismaService) {}

	findMany(args: FindManyRoomArgs) {
		return this._prisma.room.findMany(args);
	}

	create() {
		return this._prisma.room.create({});
	}
}
