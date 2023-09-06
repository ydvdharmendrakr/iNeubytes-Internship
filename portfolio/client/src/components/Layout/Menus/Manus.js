import React from "react";
import "./Manus.css";
import { Link } from 'react-router-dom'
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBusinessContact,
  FcReading,
  FcMultipleDevices,
  FcAcceptDatabase,
} from "react-icons/fc";
import Profile from "../../../assets/images/dharmendra_profile.png";

const Manus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={Profile} alt="profile pic" />
          </div>
          <div className="nav-items">
              <Link className="nav-link" to="/">
                <FcHome />
                Home
              </Link>
              <Link className="nav-link" to="/about">
                <FcAbout />
                About
              </Link>
           
              <Link className="nav-link" to="/education">
                <FcReading />
                Education
              </Link>

              <Link className="nav-link" to="techstack">
                <FcMultipleDevices />
                Technology
              </Link>

              <Link className="nav-link" to="/projects">
              <FcAcceptDatabase />
                Projects
              </Link>

              <Link className="nav-link" to="/experince">
                <FcPortraitMode />
                Experince
              </Link>
          
              <Link className="nav-link" to="contact">
                <FcBusinessContact />
                Contact
              </Link>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-link">
              <Link to="/">
               <FcHome title="Home" />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/about">
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/education">
                <FcReading title="Education" />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/techstack">
                <FcMultipleDevices title="Technology" />
              </Link>
            </div>

            <div className="nav-link">
              <Link to="/projects">
                <FcAcceptDatabase title="Projects" />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/experince">
                <FcPortraitMode title="Experince" />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/contact">
                <FcBusinessContact title="Contact" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Manus;
