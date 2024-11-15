import { useContext } from "react"
import { AuthContext } from "../stores/AuthProvider"

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context.isAuthenticated === undefined) {
    throw new Error("useAuth is not wrapped with an AuthProvider")
  }

  return context
}
