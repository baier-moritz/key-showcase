/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation Login($username: String!, $password: String!) {\n    Auth {\n      loginJwt(input:{email: $username, password: $password}) {\n      loginResult {\n        jwtTokens {\n          accessToken\n          refreshToken\n        }\n      }\n    }\n    }\n  }\n": types.LoginDocument,
    "\n  query Nodes ($first: Int, $last: Int, $before: String, $after: String){\n    Admin {\n      Tree {\n        GetContentNodes (first: $first, last: $last, before: $before, after: $after) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n          }\n          edges {\n            node {\n              id\n              attachments {\n                id\n                title\n                description\n                kind\n              }\n              structureDefinition {\n                title\n                coordinates {\n                  parentRef\n                }\n                definitionType\n              }\n              typeDefinition {\n                definitionType\n              }\n              description\n              shortDescription\n              imageId\n              image {\n                name\n                fileType\n                fileSize\n                storageKey\n                thumbnailKey\n                accessType\n                tags\n                uploadDateTime\n                id\n                thumbnail\n                url\n              }\n              versioning {\n                draftVersion\n                releaseVersion\n              }\n              instructors {\n                id\n                superId\n                name\n              }\n              parentId\n              hasBeenPublishedOnce\n              rootId\n            }\n            cursor\n          }\n        }\n      }\n    }\n}\n": types.NodesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($username: String!, $password: String!) {\n    Auth {\n      loginJwt(input:{email: $username, password: $password}) {\n      loginResult {\n        jwtTokens {\n          accessToken\n          refreshToken\n        }\n      }\n    }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($username: String!, $password: String!) {\n    Auth {\n      loginJwt(input:{email: $username, password: $password}) {\n      loginResult {\n        jwtTokens {\n          accessToken\n          refreshToken\n        }\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Nodes ($first: Int, $last: Int, $before: String, $after: String){\n    Admin {\n      Tree {\n        GetContentNodes (first: $first, last: $last, before: $before, after: $after) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n          }\n          edges {\n            node {\n              id\n              attachments {\n                id\n                title\n                description\n                kind\n              }\n              structureDefinition {\n                title\n                coordinates {\n                  parentRef\n                }\n                definitionType\n              }\n              typeDefinition {\n                definitionType\n              }\n              description\n              shortDescription\n              imageId\n              image {\n                name\n                fileType\n                fileSize\n                storageKey\n                thumbnailKey\n                accessType\n                tags\n                uploadDateTime\n                id\n                thumbnail\n                url\n              }\n              versioning {\n                draftVersion\n                releaseVersion\n              }\n              instructors {\n                id\n                superId\n                name\n              }\n              parentId\n              hasBeenPublishedOnce\n              rootId\n            }\n            cursor\n          }\n        }\n      }\n    }\n}\n"): (typeof documents)["\n  query Nodes ($first: Int, $last: Int, $before: String, $after: String){\n    Admin {\n      Tree {\n        GetContentNodes (first: $first, last: $last, before: $before, after: $after) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n          }\n          edges {\n            node {\n              id\n              attachments {\n                id\n                title\n                description\n                kind\n              }\n              structureDefinition {\n                title\n                coordinates {\n                  parentRef\n                }\n                definitionType\n              }\n              typeDefinition {\n                definitionType\n              }\n              description\n              shortDescription\n              imageId\n              image {\n                name\n                fileType\n                fileSize\n                storageKey\n                thumbnailKey\n                accessType\n                tags\n                uploadDateTime\n                id\n                thumbnail\n                url\n              }\n              versioning {\n                draftVersion\n                releaseVersion\n              }\n              instructors {\n                id\n                superId\n                name\n              }\n              parentId\n              hasBeenPublishedOnce\n              rootId\n            }\n            cursor\n          }\n        }\n      }\n    }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;