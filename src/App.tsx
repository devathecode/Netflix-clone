import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Imagecard from "./Shared/Components/Imagecard";
import Header from "./Layout/Components/Header/Header";
import Home from "./Layout/module/Home/Home";
import Footer from "./Layout/Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Home/>
        <Footer/>
    </>
  )
}

export default App
