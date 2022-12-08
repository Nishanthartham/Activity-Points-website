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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function createData(Activity, NoOfActivities, Points) {
  return { Activity, NoOfActivities, Points };
}
const styles = (theme) => ({
  tablecell: {
    fontSize: "40pt",
  },
});
function Dashboard() {
  const navigate = useNavigate();
  const rows = [
    createData("Hackathon", 2, 10),
    createData("Internship", 1, 16),
    createData("Club", 3, 10),
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <h4>
                    <b>Activity</b>
                  </h4>
                </TableCell>
                <TableCell align="center">
                  <h4>
                    <b>Number Of Activities</b>
                  </h4>
                </TableCell>
                <TableCell align="center">
                  <h4>
                    <b>Activity Points</b>
                  </h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Activity}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <h5>
                      <b>{row.Activity}</b>
                    </h5>
                  </TableCell>
                  <TableCell align="center">
                    <h5>
                      <b>{row.NoOfActivities}</b>
                    </h5>
                  </TableCell>
                  <TableCell align="center">
                    <h5>
                      <b>{row.Points}</b>
                    </h5>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </div>
  );
}

export default Dashboard;
