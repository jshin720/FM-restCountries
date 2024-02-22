import React from 'react';
// import Country from "../country/Country"
import countries from "../../data.json"
import "./search.css"

function Search({keyword, filter, searchType}) {

  console.log("search component",keyword, filter, searchType)

  const searchResults = () => {
    // console.log('results', keyword)
    // console.log("f-result", filter)

    const sResults = countries.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()));
    const fResult = countries.filter((country) => 
      country.region === filter
    )
    
    if (searchType === "search") {
      return (
        <div>
          {
            sResults.map((country, i) => {
              return (
                <div className="country-container" key={i}>
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
          }
        </div> 
      );
      if (searchType === "filter") {
    } 
      return (
        <div>
          {
            fResult.map((country, i) => {
              return (
                <div className="country-container" key={i}>
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
          }
        </div> 
      )
    }
  }

  

  return (
    <section className="search-filter">
      <form action="" className="form-control">
        <input type="search" name="search" value={query} id="search" placeholder='Search for a Country' onChange={handleInput}/>
      </form>
    </section>
  );
}

export default Search;
