import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Addtask = (props) => {
  return (
    <>
      <Link to={`${props.redirect}`}>
        <Button className="btn-add" variant="contained">
          <i
            style={{ color: "#fff" }}
            className={`fa fa-regular fa-${props.icon}`}
          ></i>
          {props.btnName}
        </Button>
      </Link>
    </>
  );
};

export default Addtask;
