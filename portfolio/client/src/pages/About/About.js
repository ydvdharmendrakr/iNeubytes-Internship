import React from 'react'
import './About.css'
import AboutImage from '../../assets/images/dk.jpg'
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={AboutImage} alt="about-image" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>I am student of BTech with computer science specialization. I am working Full Stack web development using MERN stack technology. I also expend some time exploring new technology. My future learning field is Data domain field like data science. I have learnt some technologies and skills like - Git & GitHub, Linux, Word Press, Html, Css, Bootstrap, J2SE, J2EE, JavaScript, C/C++, Python, Node Js, Mongodb, React js, Express js,Data Structure. I have some other activities and skills like writing poem, leadership,Social activist, teaching. My favorite sports is cricket and also some little other sports. Thank you !
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
