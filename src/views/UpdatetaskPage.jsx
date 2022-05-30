import Inputbox from "../components/Inputbox";
import Addtask from "../components/Addtask";
import "../App.css";

const UpdatetaskPage = () => {
  return (
    <div className="container">
      <h1>Update Task</h1>
      <Inputbox inputStat="required" read={false} label="Update Task" />
      <div className="btn-container">
        <Addtask btnName="Update Task" icon="pencil" redirect="/" />
        <Addtask btnName="Cancel" icon="arrow-left" redirect="/" />
      </div>
    </div>
  );
};

export default UpdatetaskPage;
