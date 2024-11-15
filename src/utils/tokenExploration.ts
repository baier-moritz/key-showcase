export const parseJwt = (token: string) => {
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join("")
  )
  const now = Math.floor(new Date().getTime() / 1000.0)
  const jsonObj = JSON.parse(jsonPayload)
  console.log("%c jsonObj.exp: " + JSON.stringify(jsonObj.exp - now), "color:lime")
  return jsonPayload
}
