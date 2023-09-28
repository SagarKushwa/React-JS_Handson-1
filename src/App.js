import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from "./Components/ClassComponent";
import React, {useState} from 'react'

function App() {

  const [show, setShow] = useState(false)
  const Show = ()=>{
    if (show === true){
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  const [status, setStatus] = React.useState(false)
  
  return (
    
    <div className="App">
      <h1 className='Shadow'>Styling using Functional and Class Component</h1>
      
      <div className='Container'>
        <div className='Component Functional-Cmp' onClick={Show}><h3>Too see styling in functional component</h3></div>
      
        <div className='Component Class-Cmp' onClick={()=> setStatus(!status)}><h3>Too see styling in class component</h3></div>
        
      </div>
      <div className='Container'>
        <div>
          {
            show && (<FunctionComponent />)
          }
        </div>
        
        <div>
          <div>
            {
              status? <ClassComponent />:null
            }
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
