import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  // const [userId, setUserId] = useState();
  // const [hackPoints, setHackPoints] = useState(0);
  // const [internPoints, setInternPoints] = useState(0);
  const [rows, setRows] = useState([{}]);
  // const rows = [];
  const navigate = useNavigate();
  // const data = () => {
  // const rows = [
  //   createData("Hackathon", hackPoints, 10),
  //   createData("Internship", internPoints, 16),
  //   createData("Club", 3, 10),
  // ];
  // };
  // useEffect(() => {
  //   console.log("Inside effect");
  //   // getusername();
  //   setUserId(JSON.parse(localStorage.getItem("userId")));
  //   console.log("Inside effect2 " + userId);

  //   getHackathon();
  //   console.log(hackPoints);
  //   getInternship();

  //   // data();
  //   console.log(rows);
  // }, userId);
  const userId = JSON.parse(localStorage.getItem("userId"));

  // const getusername = () => {
  //   setUserId(JSON.parse(localStorage.getItem("userId")));
  // };
  // const goToDetails = (subjectId) => {
  //   navigate(`/Details/${subjectId}`);
  // };

  const getHackathon = async () => {
    setLoading(true);
    console.log(userId + "async");
    try {
      const subjects = await axios
        .get(`http://localhost:5000/Certificate/hackathonCount/`, {
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log("Subjects -> getSubjects -> subjects", res);
          console.log(res.data);
          // setHackPoints(subjects.data);
          setRows([...rows, createData("Hackathon", res.data, res.data * 4)]);
          // rows.push(createData("Hackathon", res.data, res.data * 4));
          setLoading(false);
        });
      getInternship();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const getInternship = async () => {
    setLoading(true);
    console.log(userId + "async");
    try {
      const subjects = await axios
        .get(`http://localhost:5000/Certificate/internshipCount/`, {
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          // res = JSON.parse(res);
          console.log("Subjects -> getSubjects -> subjects", res);
          console.log(res.data);
          console.log("before" + rows);
          setRows([...rows, createData("Internship", res.data, res.data * 4)]);
          // rows.push(createData("Hackathon", res.data, res.data * 4));
          console.log(rows);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getHackathon();
  }, []);

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
