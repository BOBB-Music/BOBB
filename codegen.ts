import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://api:3000/graphql',
	documents: {
		'http://api:3000/graphql': {
			loader: './util/operations-from-schema.generator.js',
		},
	},
	generates: {
		'packages/graphql/src/lib/generated.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				{
					'typescript-apollo-angular': {
						sdkClass: false,
						addExplicitOverride: true,
					},
				},
			],
		},
	},
};

export default config;
