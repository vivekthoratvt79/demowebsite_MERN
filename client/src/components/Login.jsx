import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div class="container signup mt-4 p-5 col-md-5 col-sm-8 col-xs-12">
      <form>
        <div className="form-group text-center title mb-3 text-secondary">
          Login to your account
        </div>

        <div class="form-group mt-1">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="name@example.com"
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
        <div className="mt-3">
          <small>
            Don't have an account?&nbsp;
            <Link to="/signup">Register here</Link>
          </small>
        </div>
        <div>
          <button class="btn btn-primary mt-3 w-100">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
