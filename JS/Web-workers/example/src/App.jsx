import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  const changeColor=()=>{
   setColor(prev=>prev==='green'?'red':'green')
  }

  // main thread is getting blocked due to expensive calculation 
  // const calculateSum = ()=>{
  //   let sum = 0;
  //   for (let i = 0; i < 100000000000; i++) {
  //     sum+=i
      
  //   }
  //   alert('sum: ',sum)
  // }

  return (
    <div style={{ background: color, padding: 20 }}>
      <button onClick={calculateSum}>Calculate Sum</button>
      <br />
      <br />
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  )
}

export default App
