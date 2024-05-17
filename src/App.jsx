import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import toast,{Toaster} from 'react-hot-toast'
// import './App.css'

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster />
    </>
  )
}

export default App
