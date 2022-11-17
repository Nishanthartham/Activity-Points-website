import React, { Fragment } from "react";
import Box from "../Boxes/Box/Box";
import Intro from "../Intro/Intro";
import ControlsBar from "../ControlsBar/ControlsBar";
import Loader from "../UI/Loader/Loader";

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
              {props.items.name?.map((certificate) => {
                console.log("boxes.js " + certificate);
                count += 1;
                return (
                  <Box
                    name={certificate}
                    key={`${props.items._id.toString()}${count}`}
                    logo={props.logo}
                    //   goToEdit={() => props.goToEdit(item._id.toString())}
                    //   delete={() => props.delete(item._id.toString(), item.name)}
                    goToDetails={() =>
                      props.goToDetails(props.items._id.toString())
                    }
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
