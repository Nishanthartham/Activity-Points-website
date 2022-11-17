import React, { useState, useEffect } from "react";
// import "./Box.scss";
import "./Box.css";
import { School, Class } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

function Box(props) {
  console.log("from boxe " + props.name);
  const [img, setImg] = useState("");
  useEffect(() => {
    setImg(props.name);
  }, [props.name]);
  return (
    <div className="col-md-4" style={{ marginBottom: "20px" }}>
      <div className="wrap">
        {/* invoking parent function call through props  */}
        <div className="box">
          {/* <div className="box" onClick={props.goToDetails}> */}
          <div className="goToDetails">
            <div className="centerIt">
              {props.logo === "School" ? <School /> : <Class />}
            </div>
            {/* <div>{props.name}</div> */}
            {/* <img src={props.name} /> */}

            {/* <Card>
              <CardMedia image={props.name} />
            </Card> */}

            <img
              src={"data:image/png;base64," + img}
              alt="Image"
              className="certi-image"
            />
            {/* <a href={"data:image/png;base64," + img}>hack link</a> */}
          </div>
          {/* <div className="options">
            <div>
              {" "}
              <IconButton
                aria-label="visit"
                color="primary"
                onClick={props.goToDetails}
              >
                <Visibility />
              </IconButton>
            </div>

            <div>
              {" "}
              <IconButton aria-label="edit" onClick={props.goToEdit}>
                <EditIcon />
              </IconButton>
            </div>
            <div>
              {" "}
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={props.delete}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Box;
