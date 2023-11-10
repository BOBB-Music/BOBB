import { gql } from 'apollo-angular';

export const findManyRooms = gql`
	query findManyRooms {
		findManyRooms {
			id
		}
	}
`;
