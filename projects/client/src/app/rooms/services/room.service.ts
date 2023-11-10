import { Injectable, inject } from '@angular/core';
import { Api } from '@bobb/graphql';
import { UseQuery } from '@ngneat/query';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
	private _query = inject(UseQuery);
	private _api = inject(Api);

	findManyRooms() {
		return this._query(['findManyRooms'], () =>
			this._api
				.findManyRoomsQuery()
				.pipe(map((result) => result.data.findManyRooms)),
		);
	}
}
