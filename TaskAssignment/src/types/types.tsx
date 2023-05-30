export interface Subtask {
  id: number;
  subtask: string;
  completed: boolean;
}

export interface Tasks {
  id: number;
  task: string;
  subtasks: Array<Subtask>;
}

export interface TasksProps {
  defaultTasks: Tasks[];
}
