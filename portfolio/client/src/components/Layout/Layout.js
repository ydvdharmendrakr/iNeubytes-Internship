import React, { useState } from "react";
import "./Layout.css";
import Manus from "./Menus/Manus";
import { useTheme } from "../../context/ThemeContext";
import { BsArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Layout = () => {
    //Toggle state
    const [toggle, setToggle] = useState(true);
    //change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    };
    //Theme state
    const [theme, setTheme] = useTheme()
    //Theme funtion
    const handleTheme = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-iconts">
                        <p onClick={handleToggle}>
                            {toggle ? (
                                <BsFillArrowLeftCircleFill size={30} />
                            ) : (
                                <BsArrowRightCircleFill size={30} />
                            )}
                        </p>
                    </div>
                    <Manus toggle={toggle} />

                </div>
            </div>

            {/* DARK MODE BUTTON */}
            <div onClick={handleTheme} className="theme-btn">
                {theme === "light" ? (
                    <BsFillMoonStarsFill size={"30px"} />
                ) : (
                    <BsFillSunFill size={"30px"} />
                )}
            </div>

        </>
    );
};

export default Layout;
