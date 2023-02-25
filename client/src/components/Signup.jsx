import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    let keey = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [keey]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    if (!name || !email || !password || !cpassword) {
      return false;
    }
    if (password !== cpassword) {
      alert("Password did not match");
      return false;
    }

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const response = await res.json();
    if (res.status === 201) {
      document.getElementById("reg-form").reset();
      setUser({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
      });
      document.getElementById("reg-btn").classList.add("d-none");
      document.getElementById("success-btn").classList.remove("d-none");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      alert(`${response.error}. Try again`);
    }
  };

  return (
    <div className="container signup mt-4 p-5 col-md-6 col-sm-8 col-xs-12">
      <form id="reg-form">
        <div className="form-group text-center title mb-3 text-secondary">
          Register Yourself!
        </div>
        <div className="acc-exist">
          <small className="w-100">
            Already have an account?&nbsp;
            <Link to="/login">Login</Link>
          </small>
        </div>
        <label htmlFor="exampleFormControlInput">Name</label>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            required
            placeholder="First name"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            class="form-control"
            name="phone"
            id="phone"
            required
            placeholder="9999999999"
            maxLength={10}
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            name="work"
            required
            class="form-control"
            id="work"
            placeholder="Teacher"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            placeholder="******"
            required
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="******"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <button
            class="btn btn-primary w-100"
            id="reg-btn"
            onClick={handleSubmit}
          >
            Register
          </button>
          <button className="btn btn-success w-100 d-none" id="success-btn">
            Registraion Successful
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
