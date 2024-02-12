import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Router>
        <Navbar  title = 'TextUtils' mode = {mode} toggleMode = {toggleMode}/>
        <Routes>
          <Route exact path="/" element = {<TextForm heading = 'Enter the text and Manipulate it 😊... ' mode = {mode}/>}/>
          <Route path="/about" element = {<About mode = {mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
