import React from 'react';
import countries from "../../data.json"

function Search({keyword, filter, searchType}) {

  console.log("search component",keyword, filter, searchType)

  const searchResults = () => {

    const sResults = countries.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()));
    // console.log('results', results)
    const fResult = countries.filter((country) => 
      country.region === filter
    )
    console.log("f-result", fResult)
    
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
    } 
    if (searchType === "filter") {
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
        ) :  searchResults()
      }
    </div>
  );
}

export default Search;
