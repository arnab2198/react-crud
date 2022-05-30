import Inputbox from "../components/Inputbox";
import "../App.css";
import Addtask from "../components/Addtask";

const DeletetaskPage = () => {
  return (
    <div className="container">
      <h1>Delete Task</h1>
      <Inputbox label="Your Task" read={false} />
      <div className="btn-container">
        <Addtask btnName="Delete Task" icon="trash" redirect="/" />
        <Addtask btnName="Cancel" icon="arrow-left" redirect="/" />
      </div>
    </div>
  );
};

export default DeletetaskPage;
