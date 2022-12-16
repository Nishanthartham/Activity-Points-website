import React from "react";
import "./viewCertificate.css";
// import ViewHackathon from "./Elements/ViewHackathon";
import { useNavigate } from "react-router-dom";
const myStyle={
  backgroundImage: 
"url('https://i0.wp.com/mrcampbellrocks.com/wp-content/uploads/2022/07/Free-Mac-Folder-Icons-54.png?w=840&ssl=1')",
  height:'40vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function ViewCertificate() {
    
  const navigate = useNavigate();
  return (
    <>
      <div className="parent">
      <div className="nav-btns">
            <center>
            <button
            style={{background: "rgb(56,85,41)", color: "white"}}
              className="btn"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
             DASHBOARD
            </button>
            <button
            style={{background: "rgb(56,85,41)", color: "white"}}
              className="btn"
              onClick={() => {
                navigate("/uploadTypes");
              }}
            >
              UPLOAD
            </button>
            </center>
          </div>
        <div className="level1">
          <div className="child" style={myStyle} onClick={() => navigate("/viewhackathon")}>
            Hackathon
          </div>
          <div className="child" style={myStyle} onClick={() => navigate("/viewinternship")}>
            Internships
          </div>
          <div className="child" style={myStyle} onClick={() => navigate("/vieweightweek")}>
            8-week courses
          </div>
        </div>
        <div className="level2">
          <div className="child" style={myStyle} onClick={() => navigate("/viewtwelveweek")}>12-week courses</div>
          <div className="child" style={myStyle} >CR</div>
          <div className="child" style={myStyle} >Sports</div>
        </div>
      </div>
    </>
  );
}

export default ViewCertificate;
