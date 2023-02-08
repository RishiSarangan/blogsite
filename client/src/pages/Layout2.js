import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import Navbar from 'react-bootstrap/Navbar';

export default function Layout2(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md fixed-top">
                <a class="navbar-brand" href="/home">Blog Site</a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id = "nav-button"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <div class = "linkitems">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item">
                            {/* <a class="nav-link" href="/user/home">Home</a> */}
                            <Link to="/user/home" className='text-link'>Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="/user/compose">Compose</a> */}
                            <Link to="/user/compose" className='text-link'>Compose</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="/user/update">Update</a> */}
                            <Link to="/user/update" className='text-link'>Update</Link>
                        </li> 
                        <li class="nav-item">
                            {/* <a class="nav-link" href="/user/about">About</a> */}
                            <Link to="/user/about" className='text-link'>About</Link>
                        </li> 
                        <li class="nav-item">
                            {/* <a class="nav-link" href="/user/contact">Contact</a> */}
                            <Link to="/user/contact" className='text-link'>Contact</Link>
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