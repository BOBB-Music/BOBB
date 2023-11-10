import { FindManyRoomArgs, Room } from '@bobb/prisma';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Room)
export class RoomResolver {
	@Query(() => [Room])
	findManyRooms(@Args() args: FindManyRoomArgs): Room[] {
		console.log(args);
		return [{ id: 1 }, { id: 2 }, { id: 3 }];
	}

	@Query(() => Room)
	getRoomById(@Args('id', { type: () => Int }) id: number): Room {
		return {
			id: id,
		};
	}
}
