import React from 'react';
import './Contactus.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
// import { AiFillFacebook } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";
// import { AiOutlineTwitter } from "react-icons/ai";



export const Contactus = () => {
  return (
    <>
      <div className="whole-container">
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contact Us</h3>
                          <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>
                          <input type="text" className="form-control" placeholder="Name" />
                          <input type="text" className="form-control" placeholder="Email" />
                          <textarea className="form-control" placeholder="Message"></textarea>
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <BiSolidPhoneCall />
                      <span>  +91 9541080795</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <MdOutlineMail />
                      <span>  deveshwarzard@gmail.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <FaRegAddressCard />
                      <span>  V.P.O. Sahauran, Tehsil Kharar Distt, Kharar, Punjab 140103</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <div className="map_bind">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.772801465847!2d76.61765725903072!3d30.78095549031556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffa9485c539a5%3A0x7e32a159650281bc!2sRayat-Bahra%20University!5e0!3m2!1sen!2sin!4v1674578614246!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  );
};
