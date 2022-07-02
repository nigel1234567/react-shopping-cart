import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <nav
            className="navbar site-navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-menu">
                <a className="navbar-brand" href={process.env.PUBLIC_URL}>
                    <img
                        className="navbar-item site-navbar-item logo"
                        src={logo}
                        alt="logo"
                        width="80"
                        height="80"
                        />
                    <h5 className="navbar-item site-navbar-item company-name">
                        Blackbeard's Devil Fruits
                    </h5>
                </a>
                <div className="navbar-end site-navbar-end">
                    {/* Home button */}
                    <NavLink
                        to="/" 
                        className="navbar item site-navbar-item"
                    >
                    Home
                    </NavLink>
                    {/* About button */}
                    <NavLink
                        to="/about" 
                        className="navbar item site-navbar-item"
                    >
                    About
                    </NavLink>
                    {/* Shop button */}
                    <NavLink
                        to="/shop" 
                        className="navbar item site-navbar-item"
                    >
                    Shop
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header