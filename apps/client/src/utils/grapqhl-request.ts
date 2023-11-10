import { TypedDocumentNode } from '@apollo/client';
import { request } from 'graphql-request';
import {
	RequestDocument,
	Variables,
	VariablesAndRequestHeadersArgs,
} from 'graphql-request/build/esm/types';
import { from } from 'rxjs';
import { environment } from '../environments';
// import { TypedDocumentNode } from '@graphql-typed-document-node'

export function grapqhlRequest<T, V extends Variables = Variables>(
	document: RequestDocument | TypedDocumentNode<T, V>,
	...variablesAndRequestHeaders: VariablesAndRequestHeadersArgs<V>
) {
	return from(
		request(
			environment.graphqlUrl,
			document,
			...variablesAndRequestHeaders,
		),
	);
}
