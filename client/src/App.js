// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import UserBlogs from "./components/UserBlogs";
// import BlogDetail from "./components/BlogDetail";
// import AddBlog from "./components/AddBlog";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import Landing from './components/Landing'
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        {/* <Header /> */}
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <Landing/>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;