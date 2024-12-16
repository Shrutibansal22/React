import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has beend enabled","success");
    }
  }
  return (
  <>
  <Navbar title="Textutils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Textform showAlert={showAlert} heading="Enter the text to analyze below :" mode={mode}/>
  </div>
  {/* <About/> */}
  {/* <About/> */}
    </>
  );
}
export default App;
