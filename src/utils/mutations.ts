import { gql } from "@apollo/client"

export const LOGIN_JWT = gql(`
  mutation Login($username: String!, $password: String!) {
    Auth {
      loginJwt(input:{email: $username, password: $password}) {
      loginResult {
        jwtTokens {
          accessToken
          refreshToken
        }
      }
    }
    }
  }
`)

export interface ILoginJwt {
  data: {
    Auth: {
      loginJwt: {
        loginResult: {
          jwtTokens: {
            accessToken: string
            refreshToken: string
          }
        }
      }
    }
  }
}

export const GET_NODES = gql(`
  query Nodes ($first: Int, $last: Int, $before: String, $after: String){
    Admin {
      Tree {
        GetContentNodes (first: $first, last: $last, before: $before, after: $after) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              id
              attachments {
                id
                title
                description
                kind
              }
              structureDefinition {
                title
                coordinates {
                  parentRef
                }
                definitionType
              }
              typeDefinition {
                definitionType
              }
              description
              shortDescription
              imageId
              image {
                name
                fileType
                fileSize
                storageKey
                thumbnailKey
                accessType
                tags
                uploadDateTime
                id
                thumbnail
                url
              }
              versioning {
                draftVersion
                releaseVersion
              }
              instructors {
                id
                superId
                name
              }
              parentId
              hasBeenPublishedOnce
              rootId
            }
            cursor
          }
        }
      }
    }
}
`)

export interface IData {
  Admin: {
    Tree: {
      GetContentNodes: {
        pageInfo: {
          hasNextPage: boolean
          hasPreviousPage: boolean
          startCursor: string | null
          endCursor: string | null
        }
        edges: IItem[]
      }
    }
  }
}

type url = string

interface IItem {
  node: {
    id: string
    attachments: [
      {
        id: string
        title: string
        description: string
        kind: string
      }
    ]
    structureDefinition: {
      title: string
      coordinates: {
        parentRef: string
      }
    }
    description: string
    shortDescription: string
    imageId: string
    image: {
      name: string
      fileType: string
      fileSize: number
      storageKey: string
      thumbnailKey: string
      accessType: string
      tags: []
      uploadDateTime: string
      id: string
      thumbnail: url
      url: url
    }
    versioning: object
    instructors: []
  }
  cursor: string
}

// import { z } from 'zod';

// const IDataSchema = z.object({
//   Admin: z.object({
//     Tree: z.object({
//       GetContentNodes: z.object({
//         pageInfo: z.object({
//           hasNextPage: z.boolean(),
//           hasPreviousPage: z.boolean(),
//           startCursor: z.string().nullable(),
//           endCursor: z.string().nullable(),
//         }),
//         edges: z.array(z.any()), // Replace z.any() with a specific schema if IItem has a defined structure
//       }),
//     }),
//   }),
// });

// try {
//   const parsedData = IDataSchema.parse(incomingData); // Throws an error if data is invalid
//   // Now `parsedData` is guaranteed to match the IData structure
//   const pageInfo = parsedData.Admin.Tree.GetContentNodes.pageInfo;
// } catch (e) {
//   console.error("Invalid data structure:", e.errors);
// }

// type IData = z.infer<typeof IDataSchema>;
