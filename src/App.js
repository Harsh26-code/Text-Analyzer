
import './App.css';
import Navbar from './Component/Navbar';
import Formt from './Component/Formt';
import React,{useState} from 'react'
import Alert from './Component/Alert';
function App() {
  const[mode,setMode]=useState('light');
  // Here Alert is an Object
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);

    },1500)
  }
  const toggleMode = ()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
<>
{/* Props */}
<Navbar t="Text Analyzer" h="Home" c="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Formt showAlert={showAlert} heading="Enter your text to analyze below " mode={mode}/>
  </div> 

  </>
  );
}

export default App;
