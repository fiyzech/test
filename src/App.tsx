import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './components/HeadeHero'
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function App() {
  const [count, setCount] = useState(0)
  return (
    <><Example/></>
  )
}

export default App
