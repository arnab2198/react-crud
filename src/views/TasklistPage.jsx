import Addtask from "../components/Addtask";
import Table from "../components/Table";
import "../styles/Tasklist.css";

const TasklistPage = () => {
  return (
    <div className="list">
      <Addtask btnName="Add Task" icon="plus" redirect="/add-task" />
      <Table />
    </div>
  );
};

export default TasklistPage;
