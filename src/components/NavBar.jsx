import logo from "./images/asus_logo.png"
import React from 'react'
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}> <img src={logo} alt="logo asus azul" width={"90"}/> </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/Gaming"}>Gaming</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/Design"}>Design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/Student"}>Student</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end m-5">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;