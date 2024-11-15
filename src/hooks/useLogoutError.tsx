import { useCallback } from "react"
import { useAuth } from "./useAuth"

export const useLogoutError = () => {
  const { unAuthorize } = useAuth()
  // any: its an ApolloError but it has the statusCode wrapped in another thingy, this puzzles me - nothing strongly typed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logoutOn401 = useCallback((error: any) => {
    if (error?.networkError?.statusCode === 401 || error?.cause?.statusCode === 401) {
      unAuthorize()
    } else {
      alert(JSON.stringify(error))
    }
  }, [])
  return logoutOn401
}

// const theErrorFromLog = {
//   name: "ApolloError",
//   graphQLErrors: [],
//   protocolErrors: [],
//   clientErrors: [],
//   networkError: { name: "ServerError", response: {}, statusCode: 401, result: "jwt token expired" },
//   message: "Response not successful: Received status code 401",
//   cause: { name: "ServerError", response: {}, statusCode: 401, result: "jwt token expired" }
// }
