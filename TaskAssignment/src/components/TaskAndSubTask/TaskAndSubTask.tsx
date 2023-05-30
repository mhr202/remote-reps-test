import React, { useState } from "react";

import { Tasks, TasksProps } from "../../types/types";

import "./TaskAndSubTask.css";

const TasksAndSubtasks: React.FC<TasksProps> = ({ defaultTasks }) => {
  const [tasks, setTasks] = useState<Tasks[]>(defaultTasks);

  const toggleSubtask = (taskId: number, subtaskId: number) => {
    const updatedTasks = tasks.map((task: Tasks) => {
      if (task.id === taskId) {
        const updatedSubtasks = task.subtasks.map((subtask) => {
          if (subtask.id === subtaskId) {
            return { ...subtask, completed: !subtask.completed };
          }
          return subtask;
        });
        return { ...task, subtasks: updatedSubtasks };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const updatedTasks = tasks.filter((task: Tasks) => {
      const hasUncompletedSubtask = task.subtasks.some(
        (subtask) => !subtask.completed
      );
      return hasUncompletedSubtask;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task: Tasks) => (
        <div key={task.id}>
          <h3
            className={`task-text ${
              task.subtasks.every((subtask) => subtask.completed)
                ? "completed"
                : ""
            }`}
          >
            {task.task}
          </h3>
          <ul>
            {task.subtasks.map((subtask) => (
              <li
                key={subtask.id}
                className={`li-text ${subtask.completed ? "completed" : ""}`}
                onClick={() => toggleSubtask(task.id, subtask.id)}
              >
                {subtask.subtask}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={removeCompletedTasks}>Remove Completed Tasks</button>
    </div>
  );
};

export default TasksAndSubtasks;
