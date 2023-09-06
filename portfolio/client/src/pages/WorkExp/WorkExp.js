import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineAndroid } from "react-icons/ai";
const WorkExp = () => {
  return (
    <>
      <div className="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experince
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact color="blue" />}
            >
              <h3 className="vertical-timeline-element-title">
                Mern Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">codewithdky pvt ltd, IN</h4>
              <p>
                I use mern stacke technolgy to create projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2021 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaJava color="red" />}
            >
              <h3 className="vertical-timeline-element-title">
                Java Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">codewithdky pvt ltd, IN</h4>
              <p>
                Here we use java technolgy to create projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2021"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<AiOutlineAndroid color="green" />}
            >
              <h3 className="vertical-timeline-element-title">
                Android Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">codewithdky pvt ltd, IN</h4>
              <p>
                By use Android studio we create android application.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
