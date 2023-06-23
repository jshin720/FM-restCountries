import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Index from "./components/index/Index.jsx";
import Search from "./components/search/Search";

import countries from "./data.json";
import{ Options } from "../src/assets/dropdown"

function App() {
  const [keyword, setKeyWord] = useState('');
  const [filter, setFilter] = useState("");
  const [searchType, setSearchType] = useState(null);

  console.log(Options)

  const handleOnChange = (e) => {
    console.log("e", e.target.id);

    setSearchType(e.target.id);
    console.log("searchType", searchType)

    if (searchType === "search") {
      setKeyWord(e.target.value);
      setFilter("default")
    } else {
      setFilter(e.target.value);
      setKeyWord('')
    }
  };

  return (
    <>
      <h1>page loading</h1>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search For A Country"
        value={keyword}
        onChange={handleOnChange}
      />
      <label htmlFor="filter">Filter by Region</label>
      {/* <select name="filter" id="filter" onChange={handleOnChange}>
        <option defaultValue="default">Pick a Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select> */}

      <select name="filter" id="filter" onChange={handleOnChange}>
        {Options.map((option, i) => {
          <option value={option.value}>{option.label}</option>
        })}
      </select>

      <div>
        {!searchType ? (
          countries.map((country, i) => {
            return (
              <div className="country-container" key={i}>
                <img alt="flag" title={country.name} src={country.flags.svg} />
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
          <Search keyword={keyword} filter={filter} searchType={searchType} />
        )}
      </div>
    </>
  );
}

export default App;
