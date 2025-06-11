import { Routes, Route } from "react-router-dom"
import Landing from "../Pages/landing/Landing"
import Login from "../Pages/authentication/Login"
import Register from "@/Pages/authentication/Register"


const AppRoutes = () => {
  return (
    <Routes> elme
        <Route path = "/" element = {<Landing />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
    </Routes>
  )
}

export default AppRoutes