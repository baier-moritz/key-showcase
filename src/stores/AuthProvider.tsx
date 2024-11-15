import { createContext, ReactNode, useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { storageJwtAccess } from "../utils/apolloClient"

export interface IAuthContext {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  isAuthenticated: boolean
  authorize: (token: string, urlPath?: string) => void
  unAuthorize: () => void
}

interface IAuthProvider {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const authorize = useCallback(
    (token: string, urlPath?: string) => {
      localStorage.setItem(storageJwtAccess, token)
      setIsAuthenticated(!!token)
      if (urlPath) navigate(urlPath)
    },
    [navigate]
  )

  const unAuthorize = useCallback(() => {
    localStorage.removeItem(storageJwtAccess)
    setIsAuthenticated(false)
    navigate("/login")
  }, [navigate])

  const authObj = {
    name,
    setName,
    isAuthenticated,
    authorize,
    unAuthorize
  }

  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
}
