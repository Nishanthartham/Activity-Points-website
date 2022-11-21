import React from "react";
import "./viewCertificate.css";
// import ViewHackathon from "./Elements/ViewHackathon";
import { useNavigate } from "react-router-dom";
function ViewCertificate() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent">
        <div className="level1">
          <div className="child" onClick={() => navigate("/viewhackathon")}>
            Hackathon
          </div>
          <div className="child" onClick={() => navigate("/viewinternship")}>
            Internships
          </div>
          <div className="child" onClick={() => navigate("/vieweightweek")}>
            8-week courses
          </div>
        </div>
        <div className="level2">
          <div className="child">12-week courses</div>
          <div className="child">CR</div>
          <div className="child">Sports</div>
        </div>
      </div>
    </>
  );
}

export default ViewCertificate;
