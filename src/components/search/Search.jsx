import React from 'react';
import Countries from "../../data.json"

function Search({keyword}) {

  console.log(keyword)

  const searchResults = () => {

    const results = Countries.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()));
    console.log('results', results)

    return (
      <div>
        {
          results.map(country => {
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
      </div> 
    );
    
  }

  return (
    <div>
      {searchResults()}
    </div>
  );
}

export default Search;
