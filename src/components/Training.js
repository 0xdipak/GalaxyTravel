import React from "react";
import "./Training.css";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          autem, mollitia maxime doloribus alias placeat odio ad id impedit
          nulla.
        </p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="image-stack top">
                <img src={Moon} className='img'/>
            </div>
            <div className="image-stack bottom">
                <img src={Pod} className='img'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
