import React from 'react'
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux'

const TodosList = () => {
  const list = useSelector(state=> state.todos.todos);

  return (
    <div>
    {list.map((todo) => (
      <div key={Math.random() * 100} className="todos_container">
        <input
        className="checkbox"
          type="checkbox"
        />
        <p className="text">{todo.description}</p>
        <button className="btn_delete">
          <MdClose size={24} />
        </button>
      </div>
    ))}
  </div>
  )
}

export default TodosList
