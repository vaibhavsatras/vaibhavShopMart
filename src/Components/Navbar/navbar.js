
import React from 'react';
import './navbar.css'

export default function Navbar()
{

    return (
    <>

<nav className="navbar navbar-expand-md bg-white navbar-light shadow  mb-3 fixed-top" id="navabar1">
        <div className="container">

            <h3><a href="/" className="navbar-brand heading">SHOP <span className="text-danger">MART</span></a></h3>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#slider" className="nav-link active"><i className="fa-solid fa-house me-2"></i>Home</a></li>
                    <li className="nav-item"><a href="#offers" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
                    <li className="nav-item"><a href="#testimonial" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="#contactus" className="nav-link">Contct Us</a></li>
                </ul>
            </div>
        </div>
    </nav>


    </>)

}