import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"




function App() {


  return (
    <>
  <Nav/>

<Routes>
  
  <Route path="/" element={<Home/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
</Routes>
    </>
  )
}

export default App
