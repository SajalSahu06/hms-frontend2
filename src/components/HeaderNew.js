import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Home from "../siteImages/Home.jpeg"
import logoheader from "../siteImages/logoheader.png"
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

function HeaderNew() {
    const [user, setUser] = useState({});
    const [role, setRole] = useState("") // user object
    const logOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }



    useEffect(() => {
        const data = localStorage.getItem("user");
        setUser(JSON.parse(data));
        setRole(localStorage.getItem("role"));
    }, []);
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">
                      <img src={logoheader} alt="img" style={{ width: "60px", padding: "9px" }} />
                      <span
                             style={{
                                display: "inline-block",
                                transition: "transform 0.3s ease-in-out, margin-left 0.3s ease-in-out, box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out", // Adjust the duration as needed
                                
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = "scale(1.5)";
                                e.target.style.marginLeft = "5px"; // Adjust the distance as needed
                                e.target.style.textShadow = "0 0 15px #FFD700, 0 0 15px #FFD700, 0 0 15px #FFD700"; // Apply glow on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = "scale(1)";
                                e.target.style.marginLeft = "0";
                                e.target.style.textShadow = "none"; 
                            }}
                        >
                            <i className="fa fa-graduation-cap fa-lg mr-2"></i>
                            MediPrisc
                        </span>
                      </a>
                        
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nvbCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pl-1">
                                <a className="nav-link" href="/"><i className="fa fa-home fa-fw mr-1"></i>Home</a>
                            </li>

                            {
                                role === 'admin' ?
                                    <>
                                        <li className="nav-item pl-1">
                                            <a className="nav-link" href="/admin"><i className="fa fa-th-list fa-fw mr-1"></i>Dashboard</a>
                                        </li>
                                    </> : null
                            }

                            {role === 'user' ?
                                <>
                                    <li className="nav-item pl-1">
                                        <a className="nav-link" href="/get"><i className="fa fa-th-list fa-fw mr-1"></i>Search Reports</a>
                                    </li>
                                    <li className="nav-item pl-1">
                                        <div className="dropdown">
                                            <button className="btn nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ background: "#000000", opacity: "0.6" }}>
                                                <i className="fa fa-th-list fa-fw mr-1"></i>Services
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="/get">Lab Reports</a>
                                               {/* * <a className="dropdown-item" href="/appoinment">Channeling</a>* */}
                                                <a className="dropdown-item" href="/add">Inquiry </a>
                                                <a className="dropdown-item" href="/addpriscription">Buy Medicine</a>
                                                <a className="dropdown-item" href="/videoconsultant">Video Consultant</a>
                                                <a className="dropdown-item" href="/saerchOrder">Search Order</a>
                                                {/* <a className="dropdown-item" href="/paymentportal">Payment</a> */}
                                            </div>
                                        </div>
                                    </li> </> : null}

                            <li className="nav-item pl-1">
                                {localStorage.getItem("user") ?
                                    <div className="dropdown">
                                        <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ background: 'transparent', border: "none" }}>
                                            <PersonIcon sx={{ color: "white" }} fontSize="large" />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href={'/viewPatient/' + user._id}>Profile</a>
                                            <button type="button" className="dropdown-item" onClick={() => logOut()}>LogOut</button>
                                        </div>
                                    </div>
                                    : <a className="btn btn-primary ml-5" href='/login'>login</a>}

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>





    )
}

export default HeaderNew;