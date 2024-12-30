import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const[btnbg,setBtnbg]=useState("#0D6EFD");
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has beend enabled","success");
      setBtnbg("#0D6EFD");
      document.title="Textutols-Dark-Mode";
      // setInterval(()=>{
      //   document.title="Textutils is amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Download Textutils";
      // },1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has beend enabled","success");
      setBtnbg("#0D6EFD");
      document.title="Textutils-Light-Mode";
    }
  }
  const handleColorChange=(color,bgColor)=>{
    document.body.style.backgroundColor = color;
    setBtnbg(bgColor);
  }
  return (
  <>
  <Router>
  <Navbar title="Textutils" aboutText="About-TextUtils" mode={mode} toggleMode={toggleMode} handleColorChange={handleColorChange}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below :" mode={mode} btnbg={btnbg} />}/>
  </Routes>
  </div>
  </Router>
    </>
  );
}
export default App;
