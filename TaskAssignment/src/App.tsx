import TasksAndSubtasks from "./components/TaskAndSubTask";
import TASKS from "./components/TasksData";

import "./styles.css";

function App() {
  return <TasksAndSubtasks defaultTasks={TASKS} />;
}

export default App;
