import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewInternship() {
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
        `http://localhost:5000/Certificate/internship/${userId}`
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
          loading={loading}
          logo="School"
          thisCategory="Internship Certificates"
          // goToDetails={goToDetails}
        />
      </Fragment>
    </>
  );
}
export default ViewInternship;
