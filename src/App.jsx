import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasklistPage from "./views/TasklistPage";
import AddtaskPage from "./views/AddtaskPage";
import ViewtaskPage from "./views/ViewtaskPage";
import UpdatetaskPage from "./views/UpdatetaskPage";
import DeletetaskPage from "./views/DeletetaskPage";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasklistPage />} />
          <Route path="/view-task" element={<ViewtaskPage />} />
          <Route path="/update-task" element={<UpdatetaskPage />} />
          <Route path="/delete-task" element={<DeletetaskPage />} />
          <Route path="/add-task" element={<AddtaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
