import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Languages from "../components/Languages";

const Home = () => {
  return (
    <div className="p-4 grid grid-cols-2">
      <div className="m-8">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <TaskForm />
        <TaskList />
      </div>
      <div className="m-8">
        <Languages />
      </div>
    </div>
  );
};

export default Home;
