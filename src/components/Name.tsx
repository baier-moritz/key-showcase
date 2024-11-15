import { useAuth } from "../hooks/useAuth"

export const Name = () => {
  const { name } = useAuth()
  return <div>{`hello ${name}`}</div>
}
