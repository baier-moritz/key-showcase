import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

export const storageJwtAccess = "jwtAccessToken"
export const storageJwtRefresh = "jwtRefreshToken"
// this should be given from outside
// sth like process.env.REACT_APP_APOLLO_URL
export const apolloUrl = "https://staging.api.constellation.academy/api/graphql"

const httpLink = new HttpLink({
  uri: apolloUrl
})

const publicClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default publicClient

const authLink = setContext((_, { headers }: { headers?: Record<string, string> }) => {
  const token = localStorage.getItem(storageJwtAccess)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

export const protectedClient = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
