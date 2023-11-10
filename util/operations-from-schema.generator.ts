import {
	buildClientSchema,
	getIntrospectionQuery,
	parse,
	print,
} from 'graphql';

import { buildOperationNodeForField } from '@graphql-tools/utils';
import axios from 'axios';

const getSchemaFromUrl = async (url: string) => {
	const searchParams = {
		query: getIntrospectionQuery().toString(),
	};

	const response = await axios.get(url, {
		params: searchParams,
		responseType: `json`,
	});

	const { data } = response.data as any;
	return buildClientSchema(data);
};

const main = async (schemaUrl: string) => {
	const schema = await getSchemaFromUrl(schemaUrl);
	const operationsDictionary = {
		query: { ...(schema.getQueryType()?.getFields() ?? {}) },
		mutation: { ...(schema.getMutationType()?.getFields() ?? {}) },
		subscription: { ...(schema.getSubscriptionType()?.getFields() ?? {}) },
	};

	let documentString = ``;

	for (const [operationKind, operationValue] of Object.entries(
		operationsDictionary,
	)) {
		for (const operationName of Object.keys(operationValue)) {
			const operationAST = buildOperationNodeForField({
				schema,
				kind: operationKind as any,
				field: operationName,
			});

			documentString += print(operationAST);
		}
	}

	return parse(documentString);
};

export default main;
