import React from "react";
import Video from "../Resources/ic-play-circle-outline@2x.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-wrapper-cover">
        <div className="banner-text">
          <h3>welcome to</h3>
          <h1>Transcorp Hotel</h1>
          <p>A place to experience and enjoy the life</p>
          <img src={Video} alt="play video" className="video-btn mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
