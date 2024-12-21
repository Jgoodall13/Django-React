import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask, deleteTask } from "../api/tasksApi";

const TaskItem = ({ task }: { task: any }) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  return (
    <li className="mb-2">
      {task.title} - {task.completed ? "Completed" : "Pending"}
      <button
        onClick={() =>
          updateMutation.mutate({ id: task.id, completed: !task.completed })
        }
        className="ml-2 text-blue-500 underline"
      >
        {task.completed ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button
        onClick={() => deleteMutation.mutate(task.id)}
        className="ml-4 text-red-500 underline"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
