import React from "react";
import Form from "./components/Form";
import BasicTable from "./components/Table";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <Form />
      <BasicTable />
    </div>
  );
};

export default App;
