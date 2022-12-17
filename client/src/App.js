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
import UploadCR from "./components/UploadCertificates/UploadCR";
import UploadResearch from "./components/UploadCertificates/UploadResearch";
import UploadInternship from "./components/UploadCertificates/UploadInternship";
import ViewInternship from "./components/Elements/ViewInternship";
import ViewCR from "./components/Elements/ViewCR";
import ViewResearch from "./components/Elements/ViewResearch";
import ViewEightWeek from "./components/Elements/ViewEightWeek";
import UploadEightWeek from "./components/UploadCertificates/UploadEightWeek";
import ViewTwelveWeek from "./components/Elements/ViewTwelveWeek";
import UploadTwelveWeek from "./components/UploadCertificates/UploadTwelveWeek";
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
          <Route path="/" element={<Landing />} />

          {isLoggedIn && (
            <Route path="/viewhackathon" element={<ViewHackathon />} />
          )}
          {isLoggedIn && (
            <Route path="/viewinternship" element={<ViewInternship />} />
          )}
          {isLoggedIn && (
            <Route path="/vieweightweek" element={<ViewEightWeek />} />
          )}
          {isLoggedIn && (
            <Route path="/viewtwelveweek" element={<ViewTwelveWeek />} />
          )}
          {isLoggedIn && <Route path="/Viewcr" element={<ViewCR />} />}
          {isLoggedIn && (
            <Route path="/Viewresearch" element={<ViewResearch />} />
          )}

          {isLoggedIn && (
            <Route path="/viewtypes" element={<ViewCertificate />} />
          )}
          {isLoggedIn && (
            <Route path="/uploadtypes" element={<UploadCertificate />} />
          )}
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}

          {isLoggedIn && (
            <Route path="/uploadhackathon" element={<UploadHackathon />} />
          )}
          {isLoggedIn && (
            <Route path="/uploadinternship" element={<UploadInternship />} />
          )}
          {isLoggedIn && (
            <Route path="/uploadeightweek" element={<UploadEightWeek />} />
          )}
          {isLoggedIn && (
            <Route path="/uploadtwelveweek" element={<UploadTwelveWeek />} />
          )}
          {isLoggedIn && <Route path="/uploadcr" element={<UploadCR />} />}
          {isLoggedIn && (
            <Route path="/uploadresearch" element={<UploadResearch />} />
          )}

          {/* <Route path="/internship" element={<Internship />} /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
