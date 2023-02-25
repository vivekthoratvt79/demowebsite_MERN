import React, { useState, useEffect } from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const getData = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const response = await res.json();

    if (!response) {
      alert("Message not sent");
    } else {
      alert("Message Sent");
      setUserData({ ...userData, message: "" });
    }
  };

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
                className="form-control disabled-input"
                placeholder="Your Name"
                value={userData.name}
                onChange={handleInput}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                className="form-control disabled-input"
                value={userData.email}
                onChange={handleInput}
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone Number "
                className="form-control disabled-input"
                value={userData.phone}
                onChange={handleInput}
              />
            </div>
            <div className="mt-4">
              <textarea
                cols=""
                rows="4"
                charswidth=""
                name="message"
                className="form-control"
                value={userData.message}
                onChange={handleInput}
              ></textarea>
            </div>
          </form>
          <button
            className="btn btn-primary btn-md mt-4"
            onClick={handleMessage}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
