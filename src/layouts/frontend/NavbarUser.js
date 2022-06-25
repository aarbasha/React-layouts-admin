import React from 'react'
import Logo from "../../images/brand-logo-2.png";
import { NavLink, Link } from "react-router-dom"


const NavbarUser = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-user navbar-expand-lg fixed-top  rounded-0 border-bottom">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} width={140} />
                        </a>
                        <button
                        id='toogle'
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                    >
                                        Services
                                        <i className="bi bi-chevron-down align-middle ms-2" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:;">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <div className=' d-flex justify-content-center'>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle dropdown-toggle-nocaret  btn-primary btn-sm px-4 radius-30 text-white"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                        >
                                            Username
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/admin/index" className="dropdown-item btn-info">
                                                    Admin Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>

                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>

                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>

                                            <li>
                                                <a className="dropdown-item btn-danger" href="#">
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </div>

                            </ul>
                            <div className="d-flex justify-content-center ms-3 gap-3">
                                <NavLink
                                    to="/login"
                                    className="btn xxx nav-link  btn-sm px-4 radius-30"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/singup"
                                    className="btn xxx nav-link  btn-sm px-4 radius-30"
                                >
                                    Register
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarUser