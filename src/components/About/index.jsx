import React from "react";
import { MDBContainer } from "mdbreact";

const index = () => {
  return (
    <div className>
      <MDBContainer>
        <div className="about-wrapper">
          <div className="title-tag">About us</div>
          <div className="about-title my-5">
            A best place to enjoy <br />
            your life
          </div>
          <div className="about-desc">
            Transcorp Hilton Hotel is situated in the heart of Nigeria's Capital
            Territory, a 40-
            <br />
            minute drive from the Nnamdi Azikwe Internatonal Airport in Abuja.
            It is a 670-room, 5-star <br />
            hotel that provides luxury accomadation, exotic cuisine, and fully
            eqipped meeting rooms <br /> and to business travellers and tourists
            from all over the world
          </div>
          <div className="about-img"></div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default index;
