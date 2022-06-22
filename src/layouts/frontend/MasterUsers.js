import React from 'react'
import { Outlet } from "react-router-dom";
import FooterUser from "./FooterUser"
import NavbarUser from './NavbarUser';
import "./Style/Frontend.css"
const MasterUsers = () => {
  return (
    <>
      <div className="wrapper">
        <NavbarUser />
        {/*start content*/}
        <main className="authentication-content">
          <Outlet />
        </main>
        {/*end page main*/}
        <FooterUser />
      </div>

    </>
  )
}

export default MasterUsers