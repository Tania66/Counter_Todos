import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import logo from "../../assets/Hillel-IT-School.png";
const Footer = () => {
    const todos = useSelector((state) => state.todos.todos);
    const location = useLocation();
    const showTodos = location.pathname === "/todos";
    const logoIt = logo;
    
  return (
    <>
       <img src={logo} alt='logoItHillel' className='footer_logo'/>
      <div> 
        {showTodos &&  <span className='footer_todos_counter'>All task: {todos.length}</span>}
    </div>
    </>
  
  )
}

export default Footer
