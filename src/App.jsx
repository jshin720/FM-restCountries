import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header.jsx';
import Main from './components/main/main.jsx';
import Index from './components/index/Index.jsx'
import Search from './components/search/Search';

import Countries from "./data.json"

function App() {
  const [keyword, setKeyWord] = useState("");
  const [filter, setFilter] = useState("");
  const [searchType, setSearchType] = useState(null);

  const handleOnChange = (e) => {
    console.log("event", e.target)
    // const {name, value} = e.target;
    
    // setSearchType(name)

    // if (name === "searchbar") {
    //   setKeyWord(value);
    // } else {
    //   setFilter(value);
    // }
    // return (<Search
    //     keyword={keyword}
    //     filter={filter}
    //     searchType={searchType}
    // />)

  }

  return (
    <>
      <h1>page loading</h1>
      <input
        type="text"
        name="searchbar"
        placeholder="Search For A Country"
        value={keyword}
        onChange={handleOnChange}
      />
      <label htmlFor="filter">Filter by Region</label>
      <select name="filter" id="filter" onChange={handleOnChange}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div>
        {!keyword || !filter ? (
          Countries.map((country) => {
            return (
              <div className="country-container">
                <img src={country.flags.svg}></img>
                <span>
                  <p>{country.name}</p>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </span>
              </div>
            );
          })
        ) : (
          <>{handleOnChange()}</>
        )}
      </div>
    </>
  );
}

export default App
