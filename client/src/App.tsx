//import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const isOwnerPage: boolean = useLocation().pathname.includes('owner');

  return (
    <div>
      {!isOwnerPage && <Navbar/>}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

        <Footer/>
      </div>
    </div>
  )
}

export default App
