import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const index = () => {
  return (
    <div className="guests-wrapper">
      <MDBRow className="rooms">
        <MDBCol md="3" className="border-left">
          <div className="title">Check-in</div>
          <div className="date-label">
            <input type="date" placeholder="date" />
          </div>
        </MDBCol>
        <MDBCol md="3">
          <div className="title">Check-in</div>
          <div className="date-label">
            <input type="date" placeholder="date" />
          </div>
        </MDBCol>
        <MDBCol md="3">
          <div className="title">Check-in</div>
          <div className="date-label">
            <input type="date" placeholder="date" />
          </div>
        </MDBCol>
        <MDBCol md="3" className="promo-code">
          <p className="mt-4">Have a promotional code?</p>
          <MDBBtn className="guest-btn">Check Availability</MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default index;
