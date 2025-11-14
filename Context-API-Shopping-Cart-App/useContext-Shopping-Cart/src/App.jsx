import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Item name="Apple I phone 17" price={1700} /> 
      <Item name="Apple Macbook air" price={2000} /> 
      <Item name="Apple Smart Watch" price={500} /> 
      <Item name="Apple AirPods" price={300} /> 

      <Cart/>
    </>
  )
}

export default App
