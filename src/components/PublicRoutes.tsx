import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider"
import { Outlet } from "react-router-dom"
import publicClient from "../utils/apolloClient"

export const PublicRoutes = () => {
  return (
    <ApolloProvider client={publicClient}>
      <Outlet />
    </ApolloProvider>
  )
}
