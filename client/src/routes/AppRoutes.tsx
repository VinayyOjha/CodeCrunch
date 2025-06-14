import { Routes, Route } from "react-router-dom"
import Landing from "../Pages/landing/Landing"
import Login from "../Pages/authentication/Login"
import Register from "@/Pages/authentication/Register"
import DashboardLanding from "@/Pages/dashboarduser/dashboard/DashboardLanding"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/dashboard" element = {<DashboardLanding />} />
    </Routes>
  )
}

export default AppRoutes