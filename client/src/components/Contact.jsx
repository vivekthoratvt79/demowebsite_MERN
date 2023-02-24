import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="fluid-container p-5">
      <div className="u-display">
        <div className="box">
          <div>
            <FaPhone />
          </div>
          <div>
            Phone: <br />
            +91 9876543211
          </div>
        </div>
        <div className="box">
          <div>
            <FaEnvelope />
          </div>
          <div style={{ wordBreak: "break-word" }}>
            Email: <br />
            vivekthorat.vt79@gmail.com
          </div>
        </div>
        <div className="box">
          <div>
            <FaAddressCard />
          </div>
          <div>
            Address: <br />
            Pune, MH, India
          </div>
        </div>
      </div>

      <div className="col-md-12 l-display text-center">
        <div className="form-css">
          <h3 className="mt-2">Get in Touch</h3>
          <form className="contact-form mt-4">
            <div className="contact-inline">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your Name"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                className="form-control"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                className="form-control"
              />
            </div>
            <div className="mt-4">
              <textarea
                cols=""
                rows="4"
                charswidth=""
                name="text_body"
                className="form-control"
              ></textarea>
            </div>
          </form>
          <button className="btn btn-primary btn-md mt-4">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
