import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewInternship() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState({ username: null, name: [] });
  //const [userId, setUserId] = useState();
  //const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  console.log("outside effect");
  console.log(JSON.parse(localStorage.getItem("userId")));

  // useEffect(() => {
  //   console.log("Inside effect");
  //   // getusername();
  //   setUserId(JSON.parse(localStorage.getItem("userId")));
  //   console.log("Inside effect2 " + userId);
  //   getSubjects();
  //   console.log("Inside effect2");
  // }, userId);
  // const getusername = () => {
  //   setUserId(JSON.parse(localStorage.getItem("userId")));
  // };
  // const goToDetails = (subjectId) => {
  //   navigate(`/Details/${subjectId}`);
  // };

  const getSubjects = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    setLoading(true);
    try {
      const hackData = await axios
        .get(`http://localhost:5000/Certificate/internship/`, {
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log("Subjects -> getSubjects -> subjects", res);
          console.log("res" + res.data);
          setSubjects({
            username: res.data.username,
            name: res.data.name,
          });
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getSubjects();
  }, []);
  return (
    <>
      <Fragment>
        {console.log("data" + JSON.stringify(subjects.name))}
        <Boxes
          items={subjects.name}
          style={{ padding: "10px", margin: 2 }}
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
