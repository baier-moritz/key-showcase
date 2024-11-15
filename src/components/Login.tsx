import { useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { ILoginJwt, LOGIN_JWT } from "../utils/mutations"

export const LoginForm = () => {
  const { authorize, name, setName } = useAuth()
  const [password, setPassword] = useState("")
  const [login, { loading, error }] = useMutation(LOGIN_JWT, { variables: { username: name, password: password } })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const tokens = ((await login()) as ILoginJwt).data.Auth.loginJwt.loginResult.jwtTokens
      authorize(tokens.accessToken, "/")
    } catch (err) {
      alert(`Login error: ${JSON.stringify(err)}`)
    }
  }

  return (
    <>
      <form onSubmit={(e) => void handleSubmit(e)}>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </>
  )
}
