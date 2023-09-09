import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import tester from './components/tester'


function App() {
  const [count, setCount] = useState(0)

  return (
    <tester/>

  )
}

export default App
