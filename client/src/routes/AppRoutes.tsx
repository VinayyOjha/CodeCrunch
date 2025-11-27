import { Routes, Route } from "react-router-dom"
import Landing from "../Pages/landing/Landing"
import Login from "../Pages/authentication/Login"
import Register from "@/Pages/authentication/Register"
import DashboardLanding from "@/Pages/dashboarduser/dashboard/DashboardLanding"
import OTPComponent from "../Pages/authentication/VerifyOTP"


  const AppRoutes = () => {
    return (
      <Routes>
          <Route path = "/" element = {<Landing />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/dashboard" element = {<DashboardLanding />} />
          <Route path = "/verifyOtp" element = {<OTPComponent />} />
      </Routes>
    )
  }
  export default AppRoutes