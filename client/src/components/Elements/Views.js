import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function Views() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
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
        "http://localhost:5000/Certificate/hackathon/"
      );
      console.log("Subjects -> getSubjects -> subjects", subjects);
      console.log(subjects.data);
      setSubjects(subjects.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  console.log(subjects);
  return (
    <>
      <Fragment>
        <Boxes
          items={subjects}
          loading={loading}
          logo="School"
          thisCategory="Subjects"
          // goToDetails={goToDetails}
        />
      </Fragment>
    </>
  );
}

export default Views;
