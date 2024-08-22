import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todos/todosSlice';

const TodosForm = () => {

    const dispatch = useDispatch();

    const handleAddTodos = (text) =>{
      const todo = {
        description: text,
        // id: Math.random() * 100,
        // completed : false,
      }
      dispatch(addTodo(todo));
        }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        handleAddTodos(form.elements.text.value);
        form.reset();
    }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
    <input
          className="form_input"
          type="text"
          name='text'
          required
          placeholder="Enter task text..."
        />
        <button className="form__btn" type="submit">Add task</button>
      </form>
    </>
  )
}

export default TodosForm
