import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Index from "./components/index/Index.jsx";
import Search from "./components/search/Search";

import Countries from "./data.json";

function App() {
  const [keyword, setKeyWord] = useState("");
  const [filter, setFilter] = useState("");
  const [searchType, setSearchType] = useState("");

  const handleOnChange = (e) => {
    console.log("e", e.target.id);

    if (e) setSearchType(e.target.id);
    // console.log("searchType", searchType)

    // if (e.target.name === "searchbar") {
    //   setKeyWord(e.target.value);
    // } else {
    //   setFilter(e.target.value);
    // }

    // return ()
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
      <select name="filter" id="filter" onChange={handleOnChange}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div>
        {!searchType ? (
          Countries.map((country, i) => {
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
