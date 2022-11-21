import React from "react";
import "./viewCertificate.css";

import { useNavigate } from "react-router-dom";
// import Hackathon from "./UploadCertificates/Hackathon";
function UploadCertificate() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent">
        <div className="level1">
          <div className="child" onClick={() => navigate("/uploadhackathon")}>
            Hackathon
          </div>
          <div className="child" onClick={() => navigate("/uploadinternship")}>
            Internships
          </div>
          <div className="child" onClick={() => navigate("/uploadeightweek")}>
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

export default UploadCertificate;
