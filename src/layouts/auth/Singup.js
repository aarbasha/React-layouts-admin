import React from 'react'
import { motion } from 'framer-motion'

const Singup = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.8 }}
        >
            <div className="container">
                <div className="mt-4">
                    <div className="card rounded-0 overflow-hidden shadow-none bg-white border">
                        <div className="row g-0">
                            <div className="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                                <img src="assets/images/error/auth-img-register3.png" className="img-fluid" alt />
                            </div>
                            <div className="col-12 col-xl-4 order-xl-2">
                                <div className="card-body p-4 p-sm-5">
                                    <h5 className="card-title">Sign Up</h5>
                                    <p className="card-text mb-4">
                                        See your growth and get consulting support!
                                    </p>
                                    <form className="form-body">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label htmlFor="inputName" className="form-label">Name</label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                        <i className="bi bi-person-circle" />
                                                    </div>
                                                    <input type="email" className="form-control radius-30 ps-5" id="inputName" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                        <i className="bi bi-envelope-fill" />
                                                    </div>
                                                    <input type="email" className="form-control radius-30 ps-5" id="inputEmailAddress" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputChoosePassword" className="form-label">Enter Password</label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                        <i className="bi bi-lock-fill" />
                                                    </div>
                                                    <input type="password" className="form-control radius-30 ps-5" id="inputChoosePassword" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">I Agree to the Trems &amp; Conditions</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-primary radius-30">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="login-separater text-center">
                                                    <span>OR SIGN UP WITH EMAIL</span>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex align-items-center gap-3 justify-content-center">
                                                    <button type="button" className="btn btn-white text-danger">
                                                        <i className="bi bi-google me-0" />
                                                    </button>
                                                    <button type="button" className="btn btn-white text-primary">
                                                        <i className="bi bi-linkedin me-0" />
                                                    </button>
                                                    <button type="button" className="btn btn-white text-info">
                                                        <i className="bi bi-facebook me-0" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <p className="mb-0">
                                                    Already have an account?
                                                    <a href="authentication-signin-with-header-footer.html">Sign in here</a>
                                                </p>
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
    )
}

export default Singup