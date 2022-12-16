import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import Boxes from "../Boxes/Boxes";
import { useNavigate } from "react-router-dom";

function ViewCR() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState({ _id: null, name: [] });
  // const [userId, setUserId] = useState();
  // const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  console.log("outside effect");
  console.log(JSON.parse(localStorage.getItem("userId")));

  const deleteSubject = async (subjectId, certificate_loc) => {
    console.log("delete" + certificate_loc);
    if (window.confirm(`Do you want to delete the selected certificate `)) {
      try {
        const deleted_data = await axios
          .delete(
            `http://localhost:5000/Certificate/cr/${certificate_loc}`,
            {
              headers: {
                authorization: JSON.parse(localStorage.getItem("token")),
              },
            }
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            getSubjects();
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getSubjects = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    setLoading(true);
    try {
      console.log("inside view hack " + localStorage.getItem("token"));
      const hackData = await axios.get(
        `http://localhost:5000/Certificate/cr/`,
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log("Subjects -> getSubjects -> subjects", hackData);
      console.log(hackData.data);
      setSubjects({
        _id: hackData.data._id,
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
          items={subjects}
          id={subjects._id}
          style={{ padding: "10px", margin: 2 }}
          loading={loading}
          logo="School"
          thisCategory="CR Certificates"
          delete={deleteSubject}
          // goToDetails={goToDetails}
        />
      </Fragment>
    </>
  );
}

export default ViewCR;
