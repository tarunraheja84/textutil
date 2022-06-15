import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
        
      const [alert,setAlert]=useState(null);
      const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      }


      const [mode,setMode]=useState('light');
        const toggleModeDark=()=>{
            setMode("dark");
            document.body.style.backgroundColor="rgb(50 57 89)";
            document.body.style.color="white";
            showAlert("Dark mode has been enabled","success");
        }
        const toggleModeLight=()=>{
            setMode("light");
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            showAlert("Light mode has been enabled","success");
        }
        const toggleModeGreen=()=>{
            setMode("success");
            document.body.style.backgroundColor="#528b34";
            document.body.style.color="white";
            showAlert("Green mode has been enabled","success");
        }
        const toggleModeRed=()=>{
            setMode("danger");
            document.body.style.backgroundColor="#b34a4a";
            document.body.style.color="white";
            showAlert("Red mode has been enabled","success");
        }
      



  return (
    <>   
    
    <Navbar mode={mode} toggleModeDark={toggleModeDark} toggleModeLight={toggleModeLight} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed}/>
    <Alert alert={alert}/>
    <div className="container my-3" mode={mode}>
    </div>
    
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/> }/>
      <Route exact path="/about" element={<About mode={mode}/>} />
     
    </Routes>
  </BrowserRouter>,
    </>
  );
}
export default App;
