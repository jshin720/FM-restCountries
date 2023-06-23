import React from 'react';
import Countries from "../../data.json"

function Search({keyword, filter, searchType}) {

  console.log("search component",keyword, filter, searchType)

  const searchResults = () => {

    const sResults = Countries.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()));
    // console.log('results', results)

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

  const filterResult = () => {
    const fResult = Countries.filter((country) => 
      country.region === filter
    )
     console.log("f-result", fResult)
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

  return (
    <div>
      { searchType === "search" || filter === "default" ? searchResults() : filterResult()}
    </div>
  );
}

export default Search;
