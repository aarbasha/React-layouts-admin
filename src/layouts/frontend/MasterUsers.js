import React from 'react'
import { Outlet } from "react-router-dom";
// import FooterUser from "./FooterUser"
import NavbarUser from './NavbarUser';
import "./Style/Frontend.css"

import ThemisAdmin from '../admin/ThemisAdmin';
const MasterUsers = () => {
  return (
    <>
      <div className="wrapper">
        <NavbarUser />
        {/*start content*/}
        <main className="authentication-content mt-5">
          <Outlet />
        </main>
        {/*end page main*/}

        <ThemisAdmin />
        {/* <FooterUser /> */}
      </div>

    </>
  )
}

export default MasterUsers