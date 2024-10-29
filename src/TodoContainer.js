import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";

const TodoContainer = (props) => {
  const {
    preferences,
    addTodo,
    todos,
    toggleTodo,
    deleteTodo,
    markAllComplete,
    deleteAllCompleted,
    deleteAllTodos,
  } = props;

  const containerStyles = {
    padding: "20px",
    backgroundColor: preferences.darkMode ? "#1f1f1f" : "#f8f8f8",
    border: preferences.darkMode ? "1px solid #444" : "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px",
    color: preferences.darkMode ? "white" : "black",
  };

  return (
    <div style={containerStyles}>
      <TodoForm addTodo={addTodo} preferences={preferences} />
      <TodoList
        preferences={preferences}
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

      <TodoActions
        preferences={preferences}
        markAllComplete={markAllComplete}
        deleteAllTodos={deleteAllTodos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
};

export default TodoContainer;
