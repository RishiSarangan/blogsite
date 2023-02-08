import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import Navbar from 'react-bootstrap/Navbar';

export default function Layout(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md fixed-top">
                <a class="navbar-brand" href="/home">Blog Site</a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id = "nav-button" data-bs-toggle="collapse"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <div class = "linkitems">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item">
                            <Link to="/home" className='text-link' data-bs-target=".linkitems.show">Home</Link>
                            {/* <a class="nav-link" href="/home">Home</a> */}
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className='text-link'>About</Link>
                            {/* <a class="nav-link" href="/about">About</a> */}
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" className='text-link'>Contact</Link>
                            {/* <a class="nav-link" href="/contact">Contact</a> */}
                        </li> 
                        <li class="nav-item">
                            <Link to="/register" className='text-link'>Register</Link>
                            {/* <a class="nav-link" href="/register">Register</a> */}
                        </li> 
                        <li class="nav-item">
                            <Link to="/login" className='text-link'>Login</Link>
                            {/* <a class="nav-link" href="/login">Login</a> */}
                        </li> 
                    </ul>
                </div>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
            <div class="footer-padding">
                <div class="footer">
                    <p>A Rishikesh Sarangan Website</p>
                </div>
            </div>
        </>
    );
}