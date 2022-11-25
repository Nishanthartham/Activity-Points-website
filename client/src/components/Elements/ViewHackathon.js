import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewHackathon() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState({ username: null, name: [] });
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  console.log("outside effect");
  useEffect(() => {
    return () => {
      console.log("Inside effect");
      getSubjects();
      console.log("Inside effect2");
    };
  }, []);

  // const goToDetails = (subjectId) => {
  //   navigate(`/Details/${subjectId}`);
  // };

  const getSubjects = async () => {
    setLoading(true);
    try {
      const subjects = await axios.get(
        "http://localhost:5000/Certificate/hackathon"
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
      {console.log("from view" + subjects.name)}
      <Fragment>
        <Boxes
          items={subjects.name}
          loading={loading}
          logo="School"
          thisCategory="Subjects"
          // goToDetails={goToDetails}
        />
      </Fragment>
    </>
  );
}

export default ViewHackathon;
