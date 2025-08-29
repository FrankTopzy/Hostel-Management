//import { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const isOwnerPage: boolean = useLocation().pathname.includes('owner');

  return (
    <div className='min-h-[200vh]'>
      {!isOwnerPage && <Navbar/>}
    </div>
  )
}

export default App
