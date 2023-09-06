import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/Dharmendra_Yadav.pdf'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋🏽 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "Java Developer !",
                  "Mern Stack Developer !"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=+918953273123"
              rel="noreferrer"
              target="_blank"
            >Hire Me</a>
            <a className="btn btn-cv" href={Resume} download="Dharmendra_Yadav.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
