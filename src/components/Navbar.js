import React from 'react'
import { Link } from "react-router-dom";

export default function nav() {
    return (
        <>
            {/* // < !--Navbar -- > */}
            <nav id="navbar_top" className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <Link className="navbar-brand" to="#">
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu01i5r_V30CkDBsorNL-2hduxYb1H96dIWg&usqp=CAU" alt="ROBOLOGO" style={{maxWidth: "40px", maxHeight: "40px"}}></img></Link> */}
                        <img src="https://png.pngtree.com/template/20220505/ourmid/pngtree-red-hot-news-logo-banner-image_1335492.jpg" alt="ROBOLOGO" style={{maxWidth: "40px", maxHeight: "40px"}}></img></Link>
                       
                        
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bussiness">Bussiness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/travel">Travel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- Icon --> */}

                        <a className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#0082ca" }} href="https://www.instagram.com/anushkasharma/?hl=en" role="button"
                        ><i className="bi bi-twitter"></i></a>

                        <a className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "#ac2bac"}} href="https://www.instagram.com/virat.kohli/?hl=en" role="button"
                        ><i className="bi bi-instagram"></i></a>
                       

                    
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!--Navbar --> */}
        </>
    )
}
