import React from "react";
import "./about.css";
import profile from "../assets/profile2.png";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActivetab] = useState("about");
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  const AboutTabContent = () => {
    return (
      <div
        className="d-flex flex-row p-3"
        style={{ justifyContent: "space-between" }}
      >
        <div className="left-side d-flex flex-column" style={{ gap: "10px" }}>
          <div>User ID: </div>
          <div>Name:</div>
          <div>Email:</div>
          <div>Phone:</div>
          <div>Occupation:</div>
        </div>
        <div className="right-side d-flex flex-column" style={{ gap: "10px" }}>
          <div>{userData._id}</div>
          <div>{userData.name}</div>
          <div>{userData.email}</div>
          <div>{userData.phone}</div>
          <div>{userData.work}</div>
        </div>
      </div>
    );
  };

  const TimelineTabContent = () => {
    return (
      <div
        className="d-flex flex-row p-3"
        style={{ justifyContent: "space-between" }}
      >
        <div className="left-side d-flex flex-column" style={{ gap: "10px" }}>
          <div>Experience: </div>
          <div>Hourly Rate:</div>
          <div>Total Projects:</div>
          <div>English Proficiency:</div>
          <div>Availability:</div>
        </div>
        <div className="right-side d-flex flex-column" style={{ gap: "10px" }}>
          <div>Intermediate</div>
          <div>10$/hr</div>
          <div>18</div>
          <div>Expert</div>
          <div>6 months</div>
        </div>
      </div>
    );
  };

  return (
    <div class="container about mt-5 p-5 col-md-8 col-sm-10 col-xs-12">
      <form>
        <div className="row">
          <div className="col-md-4 u-row">
            <img src={profile} alt="profile_icon" width={150} />
            <div style={{ textAlign: "left" }}>
              <ul className="ul-skill">
                <li className="skills"> React</li>
                <li className="skills"> Express</li>
                <li className="skills"> Node</li>
                <li className="skills"> MongoDB</li>
                <li className="skills"> Git</li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex flex-column">
                <span>Vivek Thorat</span>
                <span style={{ fontSize: "12px", color: "blue" }}>
                  Web Developer
                </span>
              </div>
              <div style={{ fontSize: "14px" }}>
                Edit Profile&nbsp;
                <FaEdit color="black" />
              </div>
            </div>

            <div className="mt-4">
              Ranking:{" "}
              <span style={{ fontWeight: "bold", fontSize: "13px" }}>
                {" "}
                1/10
              </span>
            </div>

            <div className="abt-tabs mt-4">
              <div className="d-flex tab-header flex-row">
                <div
                  className={activeTab === `about` ? `active` : ""}
                  onClick={() => setActivetab("about")}
                >
                  About
                </div>
                <div
                  className={activeTab === `timeline` ? `active` : ""}
                  onClick={() => setActivetab("timeline")}
                >
                  Timeline
                </div>
              </div>

              <div className="tab-content mt-3">
                {activeTab === "about" ? (
                  <AboutTabContent />
                ) : (
                  <TimelineTabContent />
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
