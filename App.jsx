import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logos from './components/Logos/Logos';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return ( 
      <div className="App">
        <Logos></Logos>
        <WelcomePage></WelcomePage>
      </div>
  )
}
export default App;
