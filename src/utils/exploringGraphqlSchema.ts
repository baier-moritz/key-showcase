import { gql } from "@apollo/client"
import publicClient from "./apolloClient"

const INTROSPECTION_QUERY2 = gql`
  {
    __schema {
      types {
        name
        kind
        fields {
          name
          kind
          type
          args {
            name
            kind
            type {
              name
              kind
            }
          }
        }
      }
    }
  }
`

const INTROSPECTION_QUERY = gql`
  {
    __schema {
      types {
        name
        fields {
          name
          args {
            name
            type {
              name
              kind
              ofType {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const logSchema = () =>
  publicClient
    .query({
      query: INTROSPECTION_QUERY
    })
    .then((response) => {
      console.log("%c response.data: " + JSON.stringify(response.data), "color:lime")
    })
    .catch((error) => {
      console.error("Error introspecting schema:", error)
    })
