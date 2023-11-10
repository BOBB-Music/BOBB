import { environment as baseEnvironment } from './base-environment';

export const environment = {
	...baseEnvironment,
	graphqlUrl: 'https://api.bobb.app/graphql',
};
