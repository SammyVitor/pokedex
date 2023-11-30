import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.pokemon.com/br/" target="_blank">
          <img src={viteLogo} className="logo" alt="logo pokémon" />
        </a>
      </div>
      <h1>Pokémon</h1>
      <div className="card">
        <p>
          SITE OFICIAL DO POKÉMON
        </p>
      </div>
      <p className="read-the-docs">
        Click no logo para seguir para sua página 
      </p>
    </>
  )
}

export default App
