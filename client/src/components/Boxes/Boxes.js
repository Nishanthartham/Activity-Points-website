import React, { Fragment, useState, useEffect } from "react";
import Box from "../Boxes/Box/Box";
import Intro from "../Intro/Intro";
import ControlsBar from "../ControlsBar/ControlsBar";
import Loader from "../UI/Loader/Loader";
import "./Box/Box.css";

/**
 * Required Props:
 * 	loading
 * 	logo
 * 	thisCategory
 * 	items
 * 	goToAdd
 * 	goToEdit
 * 	delete
 *	goToDetails
 */
function Boxes(props) {
  console.log(props.items);
  let count = 0;
  const [dataState, setDataState] = useState([]);
  useEffect(() => {
    setDataState(props.items);
  }, [props.name]);
  return (
    <Fragment>
      {props.loading ? (
        <Loader />
      ) : (
        <div>
          <Intro thisCategory={props.thisCategory} logo={props.logo} />
          <ControlsBar
            // search={props.search}
            // searching={props.searching}
            thisCategory={props.thisCategory}
            // goToAdd={props.goToAdd}
            // adding={true}
          />
          {/* {props.items?.( */}
          {props.items !== null && (
            <div className="row">
              {props.items.map((certificate) => {
                console.log("boxes.js " + certificate);
                count += 1;
                return (
                  <Box
                    name={certificate}
                    // key={`${props.items._id.toString()}${count}`}
                    logo={props.logo}
                    //   goToEdit={() => props.goToEdit(item._id.toString())}
                    //   delete={() => props.delete(item._id.toString(), item.name)}
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
