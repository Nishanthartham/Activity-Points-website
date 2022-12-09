import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewHackathon() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState({ username: null, name: [] });
  // const [userId, setUserId] = useState();
  // const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  console.log("outside effect");
  console.log(JSON.parse(localStorage.getItem("userId")));

  const getSubjects = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    setLoading(true);
    console.log(userId + "async");
    try {
      console.log("inside view hack " + localStorage.getItem("token"));
      const hackData = await axios.get(
        `http://localhost:5000/Certificate/hackathon/`,
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log("Subjects -> getSubjects -> subjects", hackData);
      console.log(hackData.data);
      setSubjects({
        username: hackData.data.username,
        name: hackData.data.name,
      });
      setLoading(false);
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
      {/* {console.log("from view" + userId)} */}
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
