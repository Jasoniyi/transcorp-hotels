import React, { useState } from "react";
import moment from "moment";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import Logo from "../Resources/transcorp-1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-contact mt-2">
        <p>
          Contact us directly at 01 33943 +234 807 340 4890 ( Local time{" "}
          {moment("1234", "hmm").format("HH:mm")})
        </p>
        <div>
          <h6>
            EN{" "}
            <i>
              <MDBIcon icon="angle-down" />
            </i>
          </h6>
        </div>
      </div>
      <div className="divider"></div>

      {/* Menu */}
      <Router>
        <MDBNavbar color="indigo" dark expand="md" className="nav-wrapper">
          <MDBNavbarToggler
            onClick={toggleCollapse}
            className="navbar-dark navbar-expand-lg"
          />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav className="mr-2 menu navbar-expand-lg">
              <MDBNavItem active className="mr-5">
                <MDBNavLink to="#!" className="navbarnav">
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-5">
                <MDBNavLink to="/about" className="navbarnav">
                  About Us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <MDBNavLink to="#!" className="navbarnav">
                  Our Rooms
                </MDBNavLink>
              </MDBNavItem>
              <img src={Logo} alt="logo" className="mx-5 mx-1" />
              <MDBNavItem className="mx-3">
                <MDBNavLink to="#!" className="navbarnav">
                  Reservation
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-5">
                <MDBNavLink to="#!" className="navbarnav">
                  Blog
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!" className="navbarnav">
                  Contact
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    </div>
  );
};

export default Header;
