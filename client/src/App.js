import React from "react";
import Header from "./components/Header";
// import LoginForm from "./components/Login";
import { Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useSelector } from "react-redux";
function App() {
  const isSignup = useSelector((state) => state.isSignup);
  console.log(isSignup);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {/* <Route path="/auth" element={<Auth />} /> */}
          {isSignup && <Route path="/auth" element={<SignUp />} />}
          {!isSignup && <Route path="/auth" element={<Login />} />}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
