import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      date: "5th Feb 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors Appointment",
      date: "5th Feb 2023",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors Appointment",
      date: "5th Feb 2023",
      reminder: false,
    },
  ]);
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
