import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewHackathon() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState({ username: null, name: [] });
  const [userId, setUserId] = useState();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  console.log("outside effect");
  console.log(JSON.parse(localStorage.getItem("userId")));

  useEffect(() => {
    console.log("Inside effect");
    // getusername();
    setUserId(JSON.parse(localStorage.getItem("userId")));
    console.log("Inside effect2 " + userId);
    getSubjects();
    console.log("Inside effect2");
  }, userId);
  const getusername = () => {
    setUserId(JSON.parse(localStorage.getItem("userId")));
  };
  // const goToDetails = (subjectId) => {
  //   navigate(`/Details/${subjectId}`);
  // };

  const getSubjects = async () => {
    setLoading(true);
    console.log(userId + "async");
    try {
      const subjects = await axios.get(
        `http://localhost:5000/Certificate/hackathon/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log("Subjects -> getSubjects -> subjects", subjects);
      console.log(subjects.data);
      setSubjects({
        username: subjects.data.username,
        name: subjects.data.name,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      {console.log("from view" + userId)}
      <Fragment>
        <Boxes
          items={subjects.name}
          style={{padding: "10px",margin: 2}}
          loading={loading}
          logo="School"
          thisCategory="Hackathon Certificates"
          // goToDetails={goToDetails}
        />
      </Fragment>
    </>
  );
}

export default ViewHackathon;
