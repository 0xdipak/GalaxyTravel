import React from 'react'
import './Video.css'
import spaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className="hero">
      <video
        src={spaceVideo}
        autoPlay
        loop
        muted
        id="video"
        type="video/mp4"
      ></video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilian space travel.</p>
        <div>
          <Link to='/training'><button className='btn'>Program</button></Link>
          <Link to='/contact'><button className='btn btn-light'>Launch</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Video