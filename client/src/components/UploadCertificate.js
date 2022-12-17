import React from "react";
import "./viewCertificate.css";
import { useNavigate } from "react-router-dom";
const myStyle = {
  backgroundImage:
    "url('https://i0.wp.com/mrcampbellrocks.com/wp-content/uploads/2022/07/Free-Mac-Folder-Icons-54.png?w=840&ssl=1')",
  height: "45vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

// import Hackathon from "./UploadCertificates/Hackathon";
function UploadCertificate() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent">
        <div className="nav-btns">
          <center>
            <button
              style={{ background: "rgb(56,85,41)", color: "white" }}
              className="btn"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              DASHBOARD
            </button>
            <button
              style={{ background: "rgb(56,85,41)", color: "white" }}
              className="btn"
              onClick={() => {
                navigate("/viewTypes");
              }}
            >
              VIEW
            </button>
          </center>
        </div>
        <div className="level1">
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadhackathon")}
          >
            Hackathon
          </div>
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadinternship")}
          >
            Internships
          </div>
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadeightweek")}
          >
            8-week courses
          </div>
        </div>
        <div className="level2">
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadtwelveweek")}
          >
            12-week courses
          </div>
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadcr")}
          >
            CR
          </div>
          <div
            className="child"
            style={myStyle}
            onClick={() => navigate("/uploadresearch")}
          >
            Research Activity
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadCertificate;
