import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { Terms } from "../Terms&Conditions/Terms";

import { About } from "../About/About";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        We're dedicated to bringing you an exceptional shopping experience designed to perfectly complement your college journey. Our carefully curated selection of products is geared towards students who are on the lookout for convenience, style, and value.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            V.P.O. Sahauran, Tehsil Kharar Distt, Kharar, Punjab 140103
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:+91-9541080795</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email:divyaangrish365@gmail.com</div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div> */}
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text" onClick={() => navigate("/About")}>About</span>
                    <span className="text" onClick={() => navigate("/Terms")}>Privacy Policy</span>
                    <span className="text" onClick={() => navigate("/Terms")}>Returns</span>
                    <span className="text" onClick={() => navigate("/Terms")}>Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        RBU E-COMMERCE CREATED BY DEVESHWAR ZARD. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
