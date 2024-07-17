import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const onTogleFovorite = (id) => {
    console.log("work", id);
    const ableit = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isFoforite: !item.isFoforite };
      }
      return item;
    });
    setTodo(ableit);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todo={todo}
        deleteTodo={deleteTodo}
        onTogleFovorite={onTogleFovorite}
      />
    </div>
  );
};

export default TodoWrapper;
