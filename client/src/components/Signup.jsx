import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container signup mt-4 p-5 col-md-6 col-sm-8 col-xs-12">
      <form>
        <div className="form-group text-center title mb-3 text-secondary">
          Register Yourself!
        </div>
        <div className="acc-exist">
          <small className="w-100">
            Already have an account?&nbsp;
            <Link to="/login">Login</Link>
          </small>
        </div>
        <label for="exampleFormControlInput">Name</label>
        <div class="form-group inline">
          <div class="col">
            <input
              type="text"
              class="form-control"
              required
              placeholder="First name"
              name="fname"
              id="fname"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              name="lname"
              id="lname"
            />
          </div>
        </div>
        <div class="form-group mt-1">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group mt-1">
          <label for="phone">Phone</label>
          <input
            type="number"
            class="form-control"
            name="phone"
            id="phone"
            required
            placeholder="9999999999"
            maxLength={10}
          />
        </div>
        <div class="form-group mt-1">
          <label for="work">Work</label>
          <input
            type="text"
            name="work"
            required
            class="form-control"
            id="work"
            placeholder="Teacher"
          />
        </div>
        <div class="form-group mt-1">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            placeholder="******"
            required
          />
        </div>
        <div class="form-group mt-1">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="******"
            required
          />
        </div>
        <div className="mt-3">
          <button class="btn btn-primary w-100">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
