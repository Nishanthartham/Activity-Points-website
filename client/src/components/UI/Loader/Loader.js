import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./Loader.scss";
export default function Loader() {
  return (
    <div id="Loader">
      <LinearProgress className="AppProgressBar" />
    </div>
  );
}
