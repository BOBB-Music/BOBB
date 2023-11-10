import { Injectable } from '@angular/core';
import * as ApolloCore from '@apollo/client/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type IntFilter = {
	equals?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<Scalars['Int']['input']>>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntFilter = {
	equals?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<Scalars['Int']['input']>>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Query = {
	__typename?: 'Query';
	findManyRooms: Array<Room>;
	getRoomById: Room;
};

export type QueryFindManyRoomsArgs = {
	cursor?: InputMaybe<RoomWhereUniqueInput>;
	distinct?: InputMaybe<Array<RoomScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<RoomOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	take?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<RoomWhereInput>;
};

export type QueryGetRoomByIdArgs = {
	id: Scalars['Int']['input'];
};

export type Room = {
	__typename?: 'Room';
	id: Scalars['ID']['output'];
};

export type RoomAvgAggregate = {
	__typename?: 'RoomAvgAggregate';
	id?: Maybe<Scalars['Float']['output']>;
};

export type RoomCountAggregate = {
	__typename?: 'RoomCountAggregate';
	_all: Scalars['Int']['output'];
	id: Scalars['Int']['output'];
};

export type RoomMaxAggregate = {
	__typename?: 'RoomMaxAggregate';
	id?: Maybe<Scalars['Int']['output']>;
};

export type RoomMinAggregate = {
	__typename?: 'RoomMinAggregate';
	id?: Maybe<Scalars['Int']['output']>;
};

export type RoomOrderByWithRelationInput = {
	id?: InputMaybe<SortOrder>;
};

export enum RoomScalarFieldEnum {
	Id = 'id',
}

export type RoomSumAggregate = {
	__typename?: 'RoomSumAggregate';
	id?: Maybe<Scalars['Int']['output']>;
};

export type RoomWhereInput = {
	AND?: InputMaybe<Array<RoomWhereInput>>;
	NOT?: InputMaybe<Array<RoomWhereInput>>;
	OR?: InputMaybe<Array<RoomWhereInput>>;
	id?: InputMaybe<IntFilter>;
};

export type RoomWhereUniqueInput = {
	AND?: InputMaybe<Array<RoomWhereInput>>;
	NOT?: InputMaybe<Array<RoomWhereInput>>;
	OR?: InputMaybe<Array<RoomWhereInput>>;
	id?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
	Asc = 'asc',
	Desc = 'desc',
}

export type FindManyRooms_QueryQueryVariables = Exact<{
	where?: InputMaybe<RoomWhereInput>;
	orderBy?: InputMaybe<
		Array<RoomOrderByWithRelationInput> | RoomOrderByWithRelationInput
	>;
	cursor?: InputMaybe<RoomWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	distinct?: InputMaybe<Array<RoomScalarFieldEnum> | RoomScalarFieldEnum>;
}>;

export type FindManyRooms_QueryQuery = {
	__typename?: 'Query';
	findManyRooms: Array<{ __typename?: 'Room'; id: string }>;
};

export type GetRoomById_QueryQueryVariables = Exact<{
	id: Scalars['Int']['input'];
}>;

export type GetRoomById_QueryQuery = {
	__typename?: 'Query';
	getRoomById: { __typename?: 'Room'; id: string };
};

export const FindManyRooms_QueryDocument = gql`
	query findManyRooms_query(
		$where: RoomWhereInput
		$orderBy: [RoomOrderByWithRelationInput!]
		$cursor: RoomWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [RoomScalarFieldEnum!]
	) {
		findManyRooms(
			where: $where
			orderBy: $orderBy
			cursor: $cursor
			take: $take
			skip: $skip
			distinct: $distinct
		) {
			id
		}
	}
`;

@Injectable({
	providedIn: 'root',
})
export class FindManyRooms_QueryGQL extends Apollo.Query<
	FindManyRooms_QueryQuery,
	FindManyRooms_QueryQueryVariables
> {
	override document = FindManyRooms_QueryDocument;

	constructor(apollo: Apollo.Apollo) {
		super(apollo);
	}
}
export const GetRoomById_QueryDocument = gql`
	query getRoomById_query($id: Int!) {
		getRoomById(id: $id) {
			id
		}
	}
`;

@Injectable({
	providedIn: 'root',
})
export class GetRoomById_QueryGQL extends Apollo.Query<
	GetRoomById_QueryQuery,
	GetRoomById_QueryQueryVariables
> {
	override document = GetRoomById_QueryDocument;

	constructor(apollo: Apollo.Apollo) {
		super(apollo);
	}
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface WatchQueryOptionsAlone<V extends ApolloCore.OperationVariables>
	extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V>
	extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class Api {
	constructor(
		private findManyRoomsQueryGql: FindManyRooms_QueryGQL,
		private getRoomByIdQueryGql: GetRoomById_QueryGQL,
	) {}

	findManyRoomsQuery(
		variables?: FindManyRooms_QueryQueryVariables,
		options?: QueryOptionsAlone<FindManyRooms_QueryQueryVariables>,
	) {
		return this.findManyRoomsQueryGql.fetch(variables, options);
	}

	findManyRoomsQueryWatch(
		variables?: FindManyRooms_QueryQueryVariables,
		options?: WatchQueryOptionsAlone<FindManyRooms_QueryQueryVariables>,
	) {
		return this.findManyRoomsQueryGql.watch(variables, options);
	}

	getRoomByIdQuery(
		variables: GetRoomById_QueryQueryVariables,
		options?: QueryOptionsAlone<GetRoomById_QueryQueryVariables>,
	) {
		return this.getRoomByIdQueryGql.fetch(variables, options);
	}

	getRoomByIdQueryWatch(
		variables: GetRoomById_QueryQueryVariables,
		options?: WatchQueryOptionsAlone<GetRoomById_QueryQueryVariables>,
	) {
		return this.getRoomByIdQueryGql.watch(variables, options);
	}
}
