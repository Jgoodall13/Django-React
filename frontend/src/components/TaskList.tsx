import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/tasksApi";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) return <p>Loading tasks...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {tasks.map((task: any) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
