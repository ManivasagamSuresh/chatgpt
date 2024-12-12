import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="HomePage_container">
      <img src="/media/orbital.png" alt="" className="HomePage_OrbitalBg" />
      <div className="HomePage_left">
        <h1>MB_AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores delectus
          accusantium, consectetur cumque .
        </h3>
        <Link to={"/dashboard"}>Get Started</Link>
        {/* <button></button> */}
      </div>
      <div className="HomePage_right">
        <div className="Homepage_imgContainer">
          <div className="Homepage_imgContainer-BgContain">
            <div className="Homepage_imgContainer-Bg"></div>
          </div>
          <img src="/media/bot.png" alt="" className="Homepage_imgContainer-botImg" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
