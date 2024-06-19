import './App.css'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import Menu from './components/menu.jsx'
import Inicio from './components/inicio.jsx'
import Categoria from './components/Categoria/Categoria.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/categorias' element={<Categoria/>}></Route> 


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
