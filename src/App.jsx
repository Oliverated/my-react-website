// import { Routes, Route } from "react-router-dom"
import { Element } from "react-scroll"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"




function App() {


  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      <Nav />
      <Skills />
      <Element name="home"> <Home /> </Element>
    
      <Element name="about"> <About /> </Element>
      <Element name="contact"> <Contact /> </Element>
    </>
  )
}

export default App
