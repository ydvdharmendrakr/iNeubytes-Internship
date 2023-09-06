import React from 'react'
import './Footer.css'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
    return (
        <>
            <div className="footer pb-3 ms-3 ">
                <div className="copy-right">
                    <h4 className="text-center">
                        Made With ❤️ CodeWithDKY &copy; 2023
                    </h4>
                </div>
                <div className="social-meadia">

                    <a href="https://www.linkedin.com/in/ydvdharmendrakr/" target='_blank'>{<CiLinkedin color='blue' size={30} />}</a>
                    <a href="https://github.com/ydvdharmendrakr" target='_blank'>{<BsGithub color='black' size={30} />}</a>
                    <a href="https://www.instagram.com/ydvdharmendrakr/" target='_blank'>{<CiInstagram color='red' size={30} />}</a>
                    <a href="https://www.facebook.com/ydvdharmendhrakr" target='_blank'>{<CiFacebook color='blue' size={30} />}</a>
                    <a href="https://twitter.com/ydvdharmendrakr" target='_blank'>{<CiTwitter color='blue' size={30} />}</a>

                </div>
            </div>
        </>
    )
}

export default Footer
