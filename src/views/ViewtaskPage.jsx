import Inputbox from "../components/Inputbox";
import Addtask from "../components/Addtask";
import "../App.css";

const ViewtaskPage = () => {
  return (
    <div className="container">
      <h1>View Task</h1>
      <Inputbox inputStat="read-only-input" read={true} label="Your Task" />
      <Addtask btnName="Go Back" icon="arrow-left" redirect="/" />
    </div>
  );
};

export default ViewtaskPage;
