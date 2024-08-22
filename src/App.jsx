
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './pages/Counter/Counter'
import Todos from './pages/Todos/Todos'
import { Layout } from './components/Layout/Layout'

function App() {


  return (
    <div className='app'>

 
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Counter/>}/>
      <Route path='/todos' element={<Todos/>}/>
      </Route>    
      <Route path="*"  element ={<Navigate to = " / "/>}/>
    </Routes>
      </div> 
  )
}

export default App
