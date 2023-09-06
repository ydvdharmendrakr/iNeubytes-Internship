import React, { useState } from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {FcAcceptDatabase, FcMultipleDevices, FcReading} from 'react-icons/fc'
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBusinessContact,
} from "react-icons/fc";
import { AiOutlineMenuFold } from 'react-icons/ai';


const MobileNav = () => {

  const [open, setOpen] = useState(false)

  //handele open
  const handleOpen = () => {
    setOpen(!open)

  }
  // handele menu click
  const handleMenuClick = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (<AiOutlineMenuFold size={30}
            className='mobile-nav-icon' onClick={handleOpen} />)
            : (<GiHamburgerMenu size={30}
              className='mobile-nav-icon' onClick={handleOpen} />
            )}

          <span className='mobile-nav-title'>My Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-manu">
            <div className="nav-items">
              <Link className="nav-link" to="/" onClick={handleMenuClick}>
                <FcHome />
                Home
              </Link>
              <Link className="nav-link" to="/about" onClick={handleMenuClick}>
                <FcAbout />
                About
              </Link>

              <Link className="nav-link" to="/education" onClick={handleMenuClick}>
                <FcReading />
                Education
              </Link>


              <Link className="nav-link" to="techstack" onClick={handleMenuClick}>
                <FcMultipleDevices />
                Technology
              </Link>

              <Link className="nav-link" to="/projects" onClick={handleMenuClick}>
                <FcAcceptDatabase />
                Projects
              </Link>
              <Link className="nav-link" to="/experince" onClick={handleMenuClick}>
                <FcPortraitMode />
                Experince
              </Link>

              <Link className="nav-link" to="contact" onClick={handleMenuClick}>
                <FcBusinessContact />
                Contact
              </Link>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default MobileNav
