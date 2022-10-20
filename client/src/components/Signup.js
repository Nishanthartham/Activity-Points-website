import React, { Component,useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import '../index.css'
function Signup({isSignup,setIsSignup}) {

  const navigate = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    rollNo: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log("dklfs");
    if (isSignup) { 
      sendRequest("register")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => navigate("/"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => navigate("/"));
    }
  };
  const sendRequest = async (type = "register") => {
    console.log(type);
    //   .post(`http://localhost:5000/api/user/${type}`,
    const res = await axios
      .post(`http://localhost:5000/${type}`,
       {
        name: inputs.name,
        rollNo: inputs.rollNo,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    // console.log("data");
    return data;
  };
  return (
    <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='name'
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" 
          name='name'
            onChange={handleChange}
            />
        </div>

        <div className="mb-3">
          <label>Roll No</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your roll number"
            name='rollNo'
            onChange={handleChange}

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            onChange={handleChange}

          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onSubmit={()=>handleSubmit}>
            Sign Up
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>

  )
}

export default Signup