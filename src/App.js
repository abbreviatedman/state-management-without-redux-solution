import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoContainer from "./TodoContainer";

const initialTodos = [
  {
    task: 'Learn Prop Drilling',
    id: 1,
    completed: true,
  },
  {
    task: 'Learn Redux',
    id: 2,
    completed: true,
  },
  {
    task: 'Learn Redux Toolkit',
    id: 3,
    completed: false,
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [preferences, setPreferences] = useState({ darkMode: false });

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const toggleDarkMode = () => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      darkMode: !prevPreferences.darkMode,
    }));
  };

  const appStyles = {
    backgroundColor: preferences.darkMode ? "#121212" : "#fff",
    color: preferences.darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Header preferences={preferences} toggleDarkMode={toggleDarkMode} />
      <TodoContainer
        preferences={preferences}
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        markAllComplete={markAllComplete}
        deleteAllCompleted={deleteAllCompleted}
        deleteAllTodos={deleteAllTodos}
        toggleDarkMode={toggleDarkMode}
      />

      <Footer preferences={preferences} todos={todos} />
    </div>
  );
};

export default App;
