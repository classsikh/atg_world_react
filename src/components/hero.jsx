import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Hero() {
  return (
    <hero>
      <div className="hero">
          <div className="heroJoin">
            <ArrowBackIcon />
            <button className="btn-outline-light btn btn-sm"> Join Now </button>
          </div>
        <div className="heroTxt">
          <h2 className="herotitle">Computer Engineering</h2>
          <p className="herosubtitle">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </hero>
  );
}

export default Hero;
