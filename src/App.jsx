import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header.jsx';
import Main from './components/main/main.jsx';
import Index from './components/index/Index.jsx'
import Search from './components/search/Search';

import Countries from "./data.json"

function App() {
  const [searchResults, setSearchResults] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchResults = () => {
    return (<Search
        searchResults={searchResults}
    />)
  }


  return (
    <>
    <h1>page loading</h1>
    <input
      type="text"
      name="searchbar"
      value={searchResults}
      onChange={(e) => setSearchResults(e.target.value)}
    />
    
    <>
    {handleSearchResults()}
    </>
      {/* <div>
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
      </div> */}
    </>
  )
}

export default App
