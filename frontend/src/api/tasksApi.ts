const BASE_URL = "http://127.0.0.1:8000/api/tasks";

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};

export const createTask = async (newTask: {
  title: string;
  completed: boolean;
}) => {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  if (!response.ok) {
    throw new Error("Failed to create task");
  }
  return response.json();
};

export const updateTask = async (updatedTask: {
  id: number;
  completed: boolean;
}) => {
  const response = await fetch(`${BASE_URL}/${updatedTask.id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: updatedTask.completed }),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}/delete/`, {
    method: "DELETE",
  });
  if (!response.ok && response.status !== 204) {
    throw new Error("Failed to delete task");
  }
  return null; // No content for DELETE
};
