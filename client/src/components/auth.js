// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store";
// import { useNavigate } from "react-router-dom";
// import Login from "./Login";
// const Auth = () => {
//   const navigate = useNavigate();
//   const dispath = useDispatch();
//   const [inputs, setInputs] = useState({
//     name: "",
//     rollNo: "",
//     password: "",
//   });
//   const [isSignup, setIsSignup] = useState(false);
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async (type = "login") => {
//     const res = await axios
//     //   .post(`http://localhost:5000/api/user/${type}`,
//       .post(`http://localhost:5000/${type}`,
//        {
//         name: inputs.name,
//         rollNo: inputs.rollNo,
//         password: inputs.password,
//       })
//       .catch((err) => console.log(err));

//     const data = await res.data;
//     console.log(data);
//     return data;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     if (isSignup) { 
//       sendRequest("register")
//         .then((data) => localStorage.setItem("userId", data.user._id))
//         .then(() => dispath(authActions.login()))
//         .then(() => navigate("/blogs"));
//     } else {
//       sendRequest()
//         .then((data) => localStorage.setItem("userId", data.user._id))
//         .then(() => dispath(authActions.login()))
//         .then(() => navigate("/blogs"));
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           maxWidth={400}
//           display="flex"
//           flexDirection={"column"}
//           alignItems="center"
//           justifyContent={"center"}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={5}
//         >
//           <Typography variant="h2" padding={3} textAlign="center">
//             {isSignup ? "Signup" : "Login"}
//           </Typography>
//           {isSignup && (
//             <TextField
//               name="name"
//               onChange={handleChange}
//               value={inputs.name}
//               placeholder="Name"
//               margin="normal"
//             />
//           )}{" "}
//           <TextField
//             name="rollNo"
//             onChange={handleChange}
//             value={inputs.rollNo}
//             type="number"
//             // placeholder="number"
//             margin="normal"
//           />
//           <TextField
//             name="password"
//             onChange={handleChange}
//             value={inputs.password}
//             type={"password"}
//             placeholder="Password"
//             margin="normal"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ borderRadius: 3, marginTop: 3 }}
//             color="warning"
//           >
//             Submit
//           </Button>
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ borderRadius: 3, marginTop: 3 }}
//           >
//             Change To {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Auth;
import React from 'react'

function auth() {
  return (
    <div>auth</div>
  )
}

export default auth