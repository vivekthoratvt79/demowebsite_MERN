import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status) {
      dispatch({ type: "CHECK_LOGIN", payload: false });
      navigate("/login");
    }
  };
  useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);
  return <div>Logout</div>;
};

export default Logout;
