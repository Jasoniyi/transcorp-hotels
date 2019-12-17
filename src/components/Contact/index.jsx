import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

const index = () => {
  return (
    <div className="contact-wrapper">
      <MDBRow className="rooms">
        <MDBCol md="8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.846638502624!2d7.49366371478698!3d9.077732593487044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f19e2d683%3A0x6b7a1c3b4e90deff!2s1%20Aguiyi%20Ironsi%20St%2C%20Wuse%2C%20Abuja!5e0!3m2!1sen!2sng!4v1576519544467!5m2!1sen!2sng"
            width="100%"
            height="500"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
          ></iframe>
        </MDBCol>
        <MDBCol md="4">
          <div className="rooms-left rooms-xs-left">
            <div className="title-tag contact-heading">Discover our rooms</div>
            <div className="rooms-title mb-4">Luxury interior</div>
            <div className="contact-location">
              Abuja, <span>Nigeria</span>
            </div>
            <div className="contact-address">
              Address: 1 Aguiyi Ironsi St, Abuja 9000001, Nigeria <br />
              Email: info@transcorphotelsplc.com
            </div>
            <div className="contact-call">Call directly:</div>
            <div className="rooms-title mb-4">+234 708 060 3000</div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default index;
