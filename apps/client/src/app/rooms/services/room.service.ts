import { Injectable, inject } from '@angular/core';
import { grapqhlRequest } from '@bobb/client/utils';
import {
	CreateRoom_MutationDocument,
	CreateRoom_MutationMutation,
	CreateRoom_MutationMutationVariables,
	FindManyRooms_QueryDocument,
	FindManyRooms_QueryQuery,
	FindManyRooms_QueryQueryVariables,
	SortOrder,
} from '@bobb/graphql';
import { QueryClientService, UseMutation, UseQuery } from '@ngneat/query';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
	private _keys = ['rooms'];

	private _client = inject(QueryClientService);
	private _query = inject(UseQuery);
	private _mutate = inject(UseMutation);

	getRooms() {
		return this._query(this._keys, () =>
			grapqhlRequest<
				FindManyRooms_QueryQuery,
				FindManyRooms_QueryQueryVariables
			>(FindManyRooms_QueryDocument, {
				take: 5,
				orderBy: {
					id: SortOrder.Desc,
				},
			}),
		);
	}

	createRoom() {
		return this._mutate((vars: CreateRoom_MutationMutationVariables) =>
			grapqhlRequest<
				CreateRoom_MutationMutation,
				CreateRoom_MutationMutationVariables
			>(CreateRoom_MutationDocument, vars).pipe(
				tap(() => {
					// Invalidate to refetch
					this._client.invalidateQueries(this._keys);
				}),
			),
		);
	}
}
