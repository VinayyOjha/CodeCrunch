import { Routes, Route } from "react-router-dom"
import Landing from "../Pages/landing/Landing"
import Login from "../Pages/authentication/Login"


const AppRoutes = () => {
  return (
    <Routes> elme
        <Route path = "/" element = {<Landing />} />
        <Route path = "/login" element = {<Login />} />
    </Routes>
  )
}

export default AppRoutes