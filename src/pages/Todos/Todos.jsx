import React from "react";
import TodosForm from "../../components/TodosForm/TodosForm";
import TodosList from "../../components/TodosList/TodosList";
import { useSelector } from "react-redux";
import img from "../../assets/sad-mobile.png";
const Todos = () => {
  const defaultImg = img;
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div >
      <TodosForm />
      {todos.length > 0 ? (
        <TodosList />
      ) : (
        <div className="todos_inner_empty">
          <img src={defaultImg} alt="sad-boy" className="todos_inner_empty_image"/>
          <p className="todos_inner_empty_text">
            You haven't added any <span className="todos_inner_empty_span">task</span> yet...
          </p>
        </div>
      )}
    </div>
  );
};

export default Todos;
