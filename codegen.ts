import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://api:3000/graphql',
	documents: {
		'http://api:3000/graphql': {
			loader: './operations-from-schema.generator.js',
		},
	},
	generates: {
		'packages/graphql/src/lib/generated.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				{
					'typescript-apollo-angular': {
						sdkClass: true,
						serviceName: 'Api',
						addExplicitOverride: true,
					},
				},
			],
		},
	},
};

export default config;
