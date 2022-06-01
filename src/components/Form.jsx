import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../styles/Form.css";

const Form = () => {
  const [title, setTitle] = useState();
  const [value, setValue] = useState([]);

  const handleChnage = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="task-add-container">
      <form className="form-task">
        <TextField
          onChange={handleChnage}
          required
          id="standard-basic"
          label="Add Task Title"
          variant="standard"
          autoComplete="off"
        />
        <TextField
          onChange={handleChnage}
          required
          id="standard-basic"
          label="Add Task Description"
          variant="standard"
          autoComplete="off"
        />
        <Button onClick={handleSubmit} variant="contained">
          Add task
        </Button>
      </form>
    </div>
  );
};

export default Form;
