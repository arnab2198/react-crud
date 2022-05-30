import Addtask from "../components/Addtask";
import Inputbox from "../components/Inputbox";
import "../App.css";

const AddtaskPage = () => {
  return (
    <div className="container">
      <h1>Add task</h1>
      <Inputbox inputStat="required" read={false} label="Add Task" />
      <div className="btn-container">
        <Addtask btnName="Add Task" icon="plus" redirect="/" />
        <Addtask btnName="Cancel" icon="arrow-left" redirect="/" />
      </div>
    </div>
  );
};

export default AddtaskPage;
