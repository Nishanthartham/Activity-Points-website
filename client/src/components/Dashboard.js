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
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

function Dashboard() {
  const navigate = useNavigate();
  const data = [
    {
      act: "Hello",
      pts: 1,
    },
    {
      act: "Hey",
      pts: 2,
    },
    {
      act: "Hi",
      pts: 3,
    },
    {
      act: "Bye",
      pts: 4,
    },
    {
      act: "Welcome",
      pts: 5,
    },
    {
      act: "Thanks",
      pts: 6,
    },
  ];
  const columns = [
    {
      Header: "Type of Activity",
      accessor: "act",
    },
    {
      Header: "Number Of Points",
      accessor: "pts",
    },
  ];

  return (
    <div>
      <>
        <br></br>
        <center>
          <Button
            variant="text"
            style={{
              fontSize: "16px",
              color: "white",
              backgroundColor: "rgb(56,85,41)",
            }}
            sx={{ margin: 1, borderRadius: 15, padding: "10px" }}
            onClick={() => navigate("/viewtypes")}
          >
            View
          </Button>
          <Button
            variant="text"
            style={{
              fontSize: "16px",
              color: "white",
              backgroundColor: "rgb(56,85,41)",
              padding: "10px",
            }}
            sx={{ margin: 1, borderRadius: 15 }}
            onClick={() => navigate("/uploadtypes")}
          >
            Upload
          </Button>
        </center>
        <br></br>
        <br></br>

        {/* <ReactTable
          style={{
            borderBottom: "solid 3px blue",
            backgroundColor: "white",
            fontWeight: "bold",
          }}
          data={data}
          columns={columns}
          defaultPageSize={2}
          pageSizeOptions={[2, 4, 6]}
        /> */}
      </>
    </div>
  );
}

export default Dashboard;
