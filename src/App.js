
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, {useState} from 'react';
import { useEffect } from 'react';
import TextForm from './components/TextForm';
// import About from './Components/About';

function App() {
  
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('blue');
  const [color2, setColor2] = useState('white')
  const [alert, setAlert] = useState(null);
  const changebg=()=>{
    if(mode==="dark"){
      if(color==='blue'){
        document.body.style.backgroundColor='#191147'
        setColor2('#363b5f')
        
      }
      else if(color==='green'){
        document.body.style.backgroundColor='#062f1c'
        setColor2('#00522c')

      }
      else if(color==='red'){
        document.body.style.backgroundColor='#3c0107'
        setColor2('#5e3337')
      }

    }
    else{
      if(color==='blue'){
        document.body.style.backgroundColor='#d7e7ff'
        
      }
      else if(color==='green'){
        document.body.style.backgroundColor='#d2ffea'

      }
      else if(color==='red'){
        document.body.style.backgroundColor='#ffd1d6'

      }
    }
  }
  const showcolor=(newcolor)=>{
    setColor(newcolor)
  }
  const toggleDark=()=>{
    if(mode==="light"){
      setMode('dark')
      
      // showAlert("Dark mode has been set",'success')
    }
    else{
      setMode('light')
      setColor2('white')
      // showAlert("Light mode has been set",'success')
    }
  }
  useEffect(() => {
    changebg();
  }, [mode,color]);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggledark={toggleDark} showcolor={showcolor} />
    <Alert alert={alert} />
    <div className="container">
      <TextForm  color2={color2} showAlert={showAlert} title="Enter Your Text Here" mode={mode}/>
      {/* <About /> */}
    </div>
    </>
    
  );
}

export default App;
