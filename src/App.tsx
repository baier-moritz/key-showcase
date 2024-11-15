import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Home } from "./components/Home"
import { LoginForm } from "./components/Login"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { PublicRoutes } from "./components/PublicRoutes"
import { AuthProvider } from "./stores/AuthProvider.tsx"

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
