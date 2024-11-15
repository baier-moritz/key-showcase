import { Navigate, Outlet } from "react-router-dom"
import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider"
import { protectedClient } from "../utils/apolloClient"
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? (
    <ApolloProvider client={protectedClient()}>
      <Outlet />
    </ApolloProvider>
  ) : (
    <Navigate to="/login" />
  )
}
