import { useAuth } from "../hooks/useAuth"

export const Logout = () => {
  const { unAuthorize } = useAuth()

  return (
    <div onClick={unAuthorize} style={{ marginLeft: "auto" }}>
      Logout
    </div>
  )
}
