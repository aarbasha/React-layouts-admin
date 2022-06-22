import React from 'react'

const NavbarLinkItems = () => {
    return (
        <>
            <div className="top-navbar d-none d-xl-block">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="app-emailbox.html">Email</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:;">Projects</a>
                    </li>
                    <li className="nav-item d-none d-xxl-block">
                        <a className="nav-link" href="javascript:;">Events</a>
                    </li>
                    <li className="nav-item d-none d-xxl-block">
                        <a className="nav-link" href="app-to-do.html">Todo</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavbarLinkItems