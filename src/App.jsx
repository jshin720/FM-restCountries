import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header.jsx';
import Main from './components/main/main.jsx';
import Index from './components/index/Index.jsx'

import Countries from "./data.json"

function App() {
  const [count, setCount] = useState(0)
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState([]);

  return (
    <>
    <h1>page loading</h1>
      <div>
        {
          Countries.map(country => {
            return (
              <div className='country-container'>
                <img src={country.flags.svg}></img>
                <span>
                <p>{country.name}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                </span>
              </div>

            )
          })
  
        }

        {/* <Header/>
        <Main/>
        <Index/> */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
