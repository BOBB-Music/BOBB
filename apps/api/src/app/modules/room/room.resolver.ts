import { FindManyRoomArgs, Room } from '@bobb/prisma';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomService } from './room.service';

@Resolver(() => Room)
export class RoomResolver {
	constructor(private _room: RoomService) {}

	@Query(() => [Room])
	findManyRooms(@Args() args: FindManyRoomArgs): Promise<Room[]> {
		return this._room.findMany(args);
	}

	@Query(() => Room)
	getRoomById(@Args('id', { type: () => Int }) id: number): Room {
		return {
			id: id,
		};
	}

	@Mutation(() => Room)
	async createRoom() {
		return this._room.create();
	}
}
