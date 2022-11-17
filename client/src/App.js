import React from "react";
import Header from "./components/Header";
// import LoginForm from "./components/Login";
import { Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useSelector } from "react-redux";
import Views from "./components/Elements/Views";
import ViewCertificate from "./components/ViewCertificate";

import Dashboard from "./components/Dashboard";
import Hackathon from "./components/UploadCertificates/Hackathon";
import UploadCertificate from "./components/UploadCertificate";

function App() {
  const isSignup = useSelector((state) => state.isSignup);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isSignup);
  console.log("log in" + isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {isSignup && <Route path="/auth" exact element={<SignUp />} />}
          {!isSignup && <Route path="/auth" exact element={<Login />} />}
          <Route path="/views" element={<Views />} />
          <Route path="/viewtypes" element={<ViewCertificate />} />
          <Route path="/uploadtypes" element={<UploadCertificate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Hackathon />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
