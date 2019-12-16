import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Guests from "./Guests";
import About from "./About";
import Rooms from "./Rooms";
import Testimonals from "./Testimonals";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Guests />
      <About />
      <div className="bck-wrapper">
        <div className="title-tag view-more text-center">View more photos</div>
        <Rooms />
        <Testimonals />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default index;
