import { Data } from "./Data"
import { Logout } from "./Logout"
import { Name } from "./Name"

export const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <Name />
        <Logout />
      </div>
      <Data />
    </div>
  )
}
