import React, { useState } from "react";
import ContactImage from "../../assets/images/contact.jpg";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { toast } from 'react-toastify';
import axios from 'axios'
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !msg) {
                toast.error("PLease Provide all fields");
            }
            const res = await axios.post("/api/v1/portfolio/sendEmail", {
                name,
                email,
                msg,
            });
            //validation success
            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img className="image" src={ContactImage} alt="contact" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>Contact With
                                            <a href="https://www.linkedin.com/in/ydvdharmendrakr/" target="_blank"><BsLinkedin color="blue" size={24} className="ms-2" /></a>
                                            <a href="https://github.com/ydvdharmendrakr" target="_blank"><BsGithub color="black" size={25} className="ms-2" /></a>
                                            <a href="https://www.instagram.com/ydvdharmendrakr/" target="_balnk"><BsInstagram color="red" size={25} className="ms-2" /></a>
                                            <a href="https://www.facebook.com/ydvdharmendhrakr" target="_balnk"><BsFacebook color="blue" size={25} className="ms-2" /></a>
                                            <a href="https://twitter.com/ydvdharmendrakr" target="_balnk"><FaTwitterSquare color="blue" size={25} className="ms-2" /></a>
                                        </h6>
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            className="mb-3"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            className="mb-3"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            className="mb-3"
                                            type="text"
                                            name="msg"
                                            placeholder="Write your message"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button className="button"
                                            onClick={handleSubmit}>
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
