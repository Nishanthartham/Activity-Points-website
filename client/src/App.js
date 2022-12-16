import React from "react";
import Header from "./components/Header";
// import LoginForm from "./components/Login";
import { Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useSelector } from "react-redux";
import ViewHackathon from "./components/Elements/ViewHackathon";
import ViewCertificate from "./components/ViewCertificate";
import Dashboard from "./components/Dashboard";
import UploadCertificate from "./components/UploadCertificate";
import UploadHackathon from "./components/UploadCertificates/UploadHackathon";
import UploadInternship from "./components/UploadCertificates/UploadInternship";
import ViewInternship from "./components/Elements/ViewInternship";
import ViewCR from "./components/Elements/ViewCR";
import ViewResearch from "./components/Elements/ViewResearch";
import ViewEightWeek from "./components/Elements/ViewEightWeek";
import UploadEightWeek from "./components/UploadCertificates/UploadEightWeek";

import Landing from "./components/Landing";

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
          <Route path ="/" element={<Landing/>}/>

          <Route path="/viewhackathon" element={<ViewHackathon />} />
          <Route path="/viewinternship" element={<ViewInternship />} />
          <Route path="/vieweightweek" element={<ViewEightWeek />} />
          <Route path="/Viewcr" element={<ViewCR />} />
          <Route path="/Viewresearch" element={<ViewResearch />} />

            <Route path="/viewtypes" element={<ViewCertificate />} />
            <Route path="/uploadtypes" element={<UploadCertificate />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/uploadhackathon" element={<UploadHackathon />} />
            <Route path="/uploadinternship" element={<UploadInternship />} />
            <Route path="/uploadeightweek" element={<UploadEightWeek />} />

            {/* <Route path="/internship" element={<Internship />} /> */}
          </Routes>
        </main>
      </React.Fragment>
    
  );
}

export default App;
