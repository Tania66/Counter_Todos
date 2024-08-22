import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export  const Layout = () => {
  return (
    <>
      <header className="header">
<nav>
    <ul className="header_nav">
        <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/" end>Counter</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/todos">Todos</NavLink>
        </li>
    </ul>
</nav>
      </header>
      <main className='main'>
<Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
</Suspense>
      </main>
      <footer className='footer'>
<Footer/>
      </footer>
    </>
  )
}


