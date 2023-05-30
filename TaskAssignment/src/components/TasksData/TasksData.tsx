import { Tasks } from "../../types/types";

export const TASKS: Array<Tasks> = [
  {
    id: 1,
    task: "Clean bedroom",
    subtasks: [
      { id: 1, subtask: "Do laundry", completed: false },
      { id: 2, subtask: "Organize desk", completed: false },
      { id: 3, subtask: "Wipe floors", completed: false },
    ],
  },
  {
    id: 2,
    task: "Study",
    subtasks: [
      { id: 1, subtask: "Review chemistry", completed: false },
      { id: 2, subtask: "Do a React coding challenge", completed: false },
    ],
  },
  {
    id: 3,
    task: "Build website",
    subtasks: [
      { id: 1, subtask: "Choose tech stack", completed: false },
      { id: 2, subtask: "Design pages", completed: false },
      { id: 3, subtask: "Develop", completed: false },
      { id: 4, subtask: "Publish", completed: false },
    ],
  },
];
