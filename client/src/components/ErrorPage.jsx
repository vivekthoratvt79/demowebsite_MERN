import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="container error-text centered text-center">
        <div>Error: Page Not Found</div>
        <div>
          Go to <Link to="/">Home Page</Link>
        </div>
      </div>
      <div className="bg-text">404</div>
    </>
  );
};

export default ErrorPage;
