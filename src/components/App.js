import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // Initialize the tasks state with the TASKS data
  const [tasks, setTasks] = useState(TASKS);
  // Initialize the selectedCategory state with the value "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle task form submission
  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the tasks array with a unique id
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    // Filter out the task with the given taskId from the tasks array
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to handle category selection
  const handleSelectCategory = (category) => {
    // Update the selectedCategory state with the selected category value
    setSelectedCategory(category);
  };

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Render the CategoryFilter component */}
      <CategoryFilter
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      {/* Render the NewTaskForm component */}
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      {/* Render the TaskList component with filtered tasks */}
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;