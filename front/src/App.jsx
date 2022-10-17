import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lista from './Lista'
import Agregar from './Agregar'
import Editar from './Editar'

function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Page_Crud' element={<Lista/>} exact></Route>
        <Route path='/Page_Crud/agregar' element={<Agregar/>} exact></Route>
        <Route path='/Page_Crud/editar' element={<Editar/>} exact></Route>
      </Routes>
      </BrowserRouter> 
      
    </div>
    
  )
}

export default App
