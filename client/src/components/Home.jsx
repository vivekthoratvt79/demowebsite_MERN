import React, { useState, useEffect } from "react";

const Home = () => {
  const [userData, setUserData] = useState({});
  const callAboutApi = async () => {
    const res = await fetch("/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setUserData(data);
  };

  useEffect(() => {
    callAboutApi();
  }, []);

  return (
    <div className="container centered text-center">
      <p>
        <span style={{ color: "blue", fontSize: "18px" }}>Welcome </span>

        <span style={{ color: "black", fontSize: "18px", fontWeight: "900" }}>
          {userData.name}
        </span>
        <br />
        <span style={{ fontSize: "24px", fontWeight: "900" }}>
          Learn MERN Development
        </span>
      </p>
    </div>
  );
};

export default Home;
