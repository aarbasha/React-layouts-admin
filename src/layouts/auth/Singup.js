import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import NavbarUser from '../frontend/NavbarUser'
import "../frontend/Style/Frontend.css"

const Singup = () => {

    const Rediract = useNavigate()
    const handelSingup = () => {
        Rediract("/");
        localStorage.setItem("auth", "Anas")
    }
    return (

        <>
            <NavbarUser />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, scale: 0.8 }}
            >
                <div className="container">
                    <div className="mt-4 authentication-content">
                        <div className="card rounded-0 overflow-hidden shadow-none border mb-5 mb-lg-0">
                            <div className="row g-0">
                                <div className="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                                    {/* <img src="assets/images/error/auth-img-7.png" className="img-fluid" alt /> */}
                                </div>
                                <div className="col-12 col-xl-4 order-xl-2">
                                    <div className="card-body p-4 p-sm-5">
                                        <div className='d-flex justify-content-between'>
                                            <h3 className="card-title">Sign In</h3>
                                            <div className="mb-5 spinner-border text-danger" role="status"> <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                        <p className="card-text mb-4">See your growth and get consulting support!</p>
                                        <form className="form-body">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Enter Your Name</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-envelope-fill" /></div>
                                                        <input type="text" className="form-control radius-30 ps-5" placeholder="Name" />
                                                    </div>
                                                </div>



                                                <div className="col-12">
                                                    <label className="form-label">Email Address</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-envelope-fill" /></div>
                                                        <input type="email" className="form-control radius-30 ps-5" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Enter Password</label>
                                                    <div className="ms-auto position-relative">
                                                        <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-lock-fill" /></div>
                                                        <input type="password" className="form-control radius-30 ps-5" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" defaultChecked />
                                                        <label className="form-check-label">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" onClick={handelSingup} className="btn btn-primary radius-30">Sign In</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="login-separater text-center"> <span>OR SIGN IN WITH EMAIL</span>
                                                        <hr />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex align-items-center gap-3 justify-content-center">
                                                        <button type="button" className="btn btn-white text-danger"><i className="bi bi-google me-0" /></button>
                                                        <button type="button" className="btn btn-white text-primary"><i className="bi bi-linkedin me-0" /></button>
                                                        <button type="button" className="btn btn-white text-info"><i className="bi bi-facebook me-0" /></button>
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <p className="mb-0">Don't have an account yet? <a href="authentication-signup-with-header-footer.html">Sign up here</a></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>
        </>

    )
}

export default Singup