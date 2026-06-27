import React from "react";
import { NavLink } from "react-router";
import Logo from "../../../assets/PrandharaLogo111.png";

const NavMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">

        <div className="container-fluid">

          {/* Logo */}

          <NavLink to="/" className="navbar-brand">
            <img
              src={Logo}
              alt="logo"
              className="brand-logo"
            />
          </NavLink>

          {/* Hamburger */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}

          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >

            <ul className="navbar-nav mx-auto">

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

              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

            </ul>

            <div className="d-flex">

              <button className="btn appointment-btn">
                Book an Appointment
              </button>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
};

export default NavMenu;