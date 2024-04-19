import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Hero from './pages/Hero';

function App() {
  return (
    <>
      <Router>
        <div className='content'>
          <Routes>
            <Route index element={<Hero/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App