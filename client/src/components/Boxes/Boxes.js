import React, { Fragment, useState, useEffect } from "react";
import Box from "../Boxes/Box/Box";
import Intro from "../Intro/Intro";
import ControlsBar from "../ControlsBar/ControlsBar";
import Loader from "../UI/Loader/Loader";
import "./Box/Box.css";
import { useNavigate } from "react-router-dom";
/**
 * Required Props:
 * 	loading
 * 	thisCategory
 * 	items
 * 	goToAdd
 * 	logo
 * 	goToEdit
 * 	delete
 *	goToDetails
 */
function Boxes(props) {
  console.log("from boxes" + JSON.stringify(props.items));
  let count = 0;
  const [dataState, setDataState] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setDataState(props.items);
  // }, [props.name]);

  return (
    <Fragment>
      {props.loading ? (
        <Loader />
      ) : (
        <div>
          <Intro thisCategory={props.thisCategory} logo={props.logo} />
          {/* <ControlsBar
            // search={props.search}
            // searching={props.searching}
            thisCategory={props.thisCategory}
            // goToAdd={props.goToAdd}
            // adding={true}
          /> */}
          <div className="nav-btns">
            <center>
              <button
                style={{ background: "rgb(56,85,41)", color: "white" }}
                className="btn"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                DASHBOARD
              </button>
              <button
                style={{ background: "rgb(56,85,41)", color: "white" }}
                className="btn"
                onClick={() => {
                  navigate("/uploadTypes");
                }}
              >
                UPLOAD
              </button>
            </center>
          </div>
          {/* {props.items?.( */}
          {props.items.name !== null && (
            <div className="row">
              {props.items.name.map((certificate, index) => {
                // console.log("index " + index)
                console.log("boxes.js " + certificate);
                console.log("boxes.js index " + index);
                count += 1;
                return (
                  <Box
                    name={certificate}
                    // key={`${props.items._id.toString()}${count}`}
                    logo={props.logo}
                    //   goToEdit={() => props.goToEdit(item._id.toString())}
                    delete={() => props.delete(props.id.toString(), index)}
                    // goToDetails={() =>
                    //   props.goToDetails(props.items.name._id.toString())
                    // }
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default Boxes;
