import React from "react";
import { MDBIcon } from "mdbreact";

import Image from "../Resources/oval@2x.png";

const index = () => {
  return (
    <div className="testimonals-wrapper">
      <div className="title-tag mt-5">testimonals</div>
      <div className="testimonals-title">What guests Say</div>
      <div className="testimonals-desc mt-4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Fusce commodo urna id neque finibus, ac sollicitudin arcu <br />
        tempus. In hac habitasse platea dictumst"
      </div>
      <div className="testimonals-img">
        <img src={Image} alt="person" className="testimonal-image" />
      </div>
      <div className="testimonals-image-name mt-3">farah wiliams</div>
      <div className="select-testimonal">
        <MDBIcon size="1x" icon="circle" className="amber-text p-1" />
        <MDBIcon size="1x" far icon="circle" className="amber-text p-1" />
        <MDBIcon far icon="circle" className="amber-text p-1" />
        <MDBIcon far icon="circle" className="amber-text p-1" />
        <MDBIcon far icon="circle" className="amber-text p-1" />
      </div>
    </div>
  );
};

export default index;
