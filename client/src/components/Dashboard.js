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
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      dsflkj
      <Button
        variant="text"
        style={{ fontSize: "16px", backgroundColor: "grey" }}
        sx={{ margin: 1, borderRadius: 15, padding: "10px" }}
        onClick={() => navigate("/viewtypes")}
      >
        View
      </Button>
      <Button
        variant="text"
        style={{ fontSize: "16px", backgroundColor: "grey", padding: "10px" }}
        sx={{ margin: 1, borderRadius: 15 }}
        onClick={() => navigate("/uploadtypes")}
      >
        Upload
      </Button>
    </>
  );
}

export default Dashboard;
