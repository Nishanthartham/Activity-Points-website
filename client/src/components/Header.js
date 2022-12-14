import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useStyles } from "./utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const signin = () => {
    navigate("/auth");
    dispatch(authActions.signin());
  };
  const signup = () => {
    dispatch(authActions.signup());
    navigate("/auth");
  };
  const logout = () => {
    localStorage.removeItem("userId");
    dispatch(authActions.logout());
    dispatch(authActions.signin());
    navigate("/auth");
  };
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgb(56,85,41)",
      }}
    >
      <Toolbar>
        <button
          // className={classes.font}
          // variant="h4"
          // style={{ cursor: "pointer" }}
          // className="APT_btn"
          style={{
            height: "7vh",
            width: "12%",
            borderRadius: "none",
            backgroundColor: "rgb(56, 85, 41)",
          }}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          APT
        </button>
        <Box display="flex" marginLeft={"auto"}>
          {/* {isLoggedIn && (
            <>
              <Button
                variant="text"
                style={{ color: "#ffffff", fontSize: "16px" }}
                sx={{ margin: 1, borderRadius: 15 }}
                // onClick={navigate("/viewtypes")}
              >
                View
              </Button>
              <Button
                variant="text"
                style={{ color: "#ffffff", fontSize: "16px" }}
                sx={{ margin: 1, borderRadius: 15 }}
                // onClick={navigate("/uploadtypes")}
              >
                Upload
              </Button>
            </>
          )} */}
          {!isLoggedIn && (
            <>
              <Button
                variant="text"
                style={{ color: "#ffffff", fontSize: "16px" }}
                sx={{ margin: 1, borderRadius: 15 }}
                onClick={signup}
              >
                Sign up
              </Button>
              <Button
                variant="text"
                style={{ color: "#ffffff", fontSize: "16px" }}
                sx={{ margin: 1, borderRadius: 15 }}
                onClick={signin}
              >
                Login
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              variant="text"
              style={{ color: "#ffffff", fontSize: "16px" }}
              sx={{ margin: 1, borderRadius: 15 }}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
