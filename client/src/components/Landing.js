import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{"padding":'30px'}}>
      <div>
      <img width="45%" style={{"display":"inline-block", "float":"right"}} src="https://i.pinimg.com/736x/a5/f4/ae/a5f4ae794c27188ab86b9fd8747986a9.jpg"></img>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <h1 style={{"font-size":'8rem'}}>
        ACTIVITY POINTS TRACKER
        </h1>
      <button 
      style={{
        padding:"10px",
      fontSize:"2rem",
      border:"none",
      outline:"none",
      background: "#8B181B",
      color:"white",
      borderRadius:"7px"
    }}  
      onClick={() => {
        navigate("/auth");
      }}>
        Sign Up -{'>'}
      </button>
    </div>
    
      </div>

  )
}

export default Landing