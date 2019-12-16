import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon
} from "mdbreact";

import WindowView from "../Resources/rectangle-4-copy-7.png";
import Dinner from "../Resources/rectangle-4-copy-7_2.png";
import Pool from "../Resources/rectangle-4-copy-7_3.png";

const index = () => {
  return (
    <MDBContainer>
      <div className="blog-wrapper">
        <div className="blog-title">Latest from our Blog</div>
        <div className="blog-cards">
          <MDBRow>
            <MDBCol md="4">
              <MDBCard style={{ width: "18rem" }} className="blog-xs-card">
                <MDBCardImage className="img-fluid" src={WindowView} waves />
                <MDBCardBody>
                  <MDBCardTitle className="blog-date">
                    April 10th, 2018
                  </MDBCardTitle>
                  <MDBCardText className="blog-link-title">
                    <a>
                      Five reasons to stay at the beautiful <br />
                      Transcorp Hotel.
                    </a>
                  </MDBCardText>
                  <div className="blog-link">
                    Continue{" "}
                    <i>
                      <MDBIcon icon="arrow-right" size="1x" />
                    </i>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4">
              <MDBCard style={{ width: "18rem" }} className="blog-xs-card">
                <MDBCardImage className="img-fluid" src={Dinner} waves />
                <MDBCardBody>
                  <MDBCardTitle className="blog-date">
                    April 10th, 2018
                  </MDBCardTitle>
                  <MDBCardText className="blog-link-title">
                    <a>
                      Five reasons to stay at the beautiful <br />
                      Transcorp Hotel.
                    </a>
                  </MDBCardText>
                  <div className="blog-link">
                    Continue{" "}
                    <i>
                      <MDBIcon icon="arrow-right" size="1x" />
                    </i>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4">
              <MDBCard style={{ width: "18rem" }} className="blog-xs-card">
                <MDBCardImage className="img-fluid" src={Pool} waves />
                <MDBCardBody>
                  <MDBCardTitle className="blog-date">
                    April 10th, 2018
                  </MDBCardTitle>
                  <MDBCardText className="blog-link-title">
                    <a>
                      Five reasons to stay at the beautiful <br />
                      Transcorp Hotel.
                    </a>
                  </MDBCardText>
                  <div className="blog-link">
                    Continue{" "}
                    <i>
                      <MDBIcon icon="arrow-right" size="1x" />
                    </i>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </MDBContainer>
  );
};

export default index;
