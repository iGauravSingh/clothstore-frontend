import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './pages/Example'
import Homepage from './pages/homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage />
    </>
  )
}

export default App