import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import "./Upload.css";
import { padding } from "@mui/system";
// import useStyles from "./styles";
function Hackathon() {
  // const classes = useStyles();
  const navigate = useNavigate();
  const [Data, setData] = useState({
    // username: localStorage.getItem("userId"),
    username: "fsd",
    selectedFile: "",
  });
  const [userId, setUserId] = useState();
  // console.log("hack upload data " + Data.selectedFile);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("heelo");
    // const data = new FormData(event.currentTarget);
    sendRequest(Data).then((res_data) => {
      console.log("sdfsdf" + res_data.data.username);
      // console.log("sdfsdf" + res_data.data.name);
      navigate("/viewtypes");
      // }
    });
    // console.log({
    //   rollno: data.get("rollNo"),
    //   password: data.get("password"),
    // });
  };
  useEffect(() => {
    console.log("Inside effect");
    // getusername();
    setUserId(JSON.parse(localStorage.getItem("userId")));
    console.log("Inside effect2 " + userId);
    console.log("Inside effect2");
  }, userId);
  const sendRequest = async (Data) => {
    const res = await axios
      .post(`http://localhost:5000/Certificate/hackathon/${userId}`, {
        username: Data.username,
        name: Data.selectedFile,
      })
      .catch((err) => {
        console.log(err);
      });
    const res_data = res;
    console.log("kjhg" + JSON.stringify(res));
    return res_data;
  };
  return (
    <>
      <div>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          
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
                navigate("/viewTypes");
              }}
            >
              VIEW
            </button>
            </center>
          </div>
          <center>
          <FileBase className="btn"
            type="image/png"
            multiple={false}
            onDone={({ base64 }) => {
              console.log("kjhg");
              setData({
                ...Data,
                selectedFile: base64,
              });
            }}
          />
          <Button
            type="submit"
            
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ "background-color": "#8b181b", marginTop: 30, "border-radius":"15px", width:"300px"}}
          >
            <h5>Submit</h5>
          </Button>
          </center>
        </Box>
      </div>
    </>
  );
}

export default Hackathon;
