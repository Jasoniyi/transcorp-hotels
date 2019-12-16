import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Social from "../Resources/group-9@2x.png";

const index = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer pt-5">
        <MDBRow className="rooms footer-lists">
          <MDBCol md="3">
            <div className="footer-list">
              <ul>
                <li>Site Map</li>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Help</li>
                <li>Affliate</li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div className="footer-list">
              <ul>
                <li>Our Location</li>
                <li>Career</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div className="footer-list">
              <ul>
                <li>FAQs</li>
                <li>Car Blog</li>
                <li>Location</li>
                <li>Press</li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div className="footer-list">
              <ul>
                <li>Sign up to get our newsletter</li>
                <li className="sign-up">
                  <input placeholder="Your email..." type="text" />
                  <MDBIcon
                    icon="paper-plane"
                    size="1x"
                    className="signup-icon"
                  />
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
        <div className="divider"></div>
        <div className="social-media-icons">
          <img src={Social} alt="social handles" className="socials" />
        </div>
      </div>
    </div>
  );
};

export default index;
