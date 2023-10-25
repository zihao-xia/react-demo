import { Link, Outlet } from "react-router-dom"
import { request } from "@/utils"
import { useEffect } from "react"

const Layout = () => {
  useEffect(() => {
    request.get('/user/profile')
  }, [])
  return (
    <div>
      layout
      <Link to="/">board</Link>
      <Link to="/about">about</Link>
      <Outlet />
    </div>
  )
}

export default Layout