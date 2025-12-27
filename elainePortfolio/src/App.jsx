import { useState } from 'react'
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
