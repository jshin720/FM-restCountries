import React from 'react';
import Country from "../country/Country"
import countries from "../../data.json"

function Search({keyword, filter, searchType}) {

  // console.log("search component",keyword, filter, searchType)

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
                  {/* <img src={country.flags.svg}></img> */}
                  <span>
                    <p>{country.name}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    {/* <p>Capital: {country.capital}</p> */}
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
    // <div>
    //   {!searchType ? (
    //       countries.map((country, i) => {
    //         return (
    //           <div className="country-container" key={i}>
    //             <img alt="flag" title={country.name} src={country.flags.svg} />
    //             <span>
    //               <p>{country.name}</p>
    //               <p>Population: {country.population}</p>
    //               {/* <p>Region: {country.region}</p> */}
    //               <p>Capital: {country.capital}</p>
    //             </span>
    //           </div>
    //         );
    //       })
    //     ) :  searchResults()
    //   }
    // </div>

    <section className="search-filter">
      <form>
        <input type="search" name="" id="" placeholder='Search For Country'/>
      </form>
      <div>
        <select name="country-select" id="country-select" className='country-select'>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          
        </select>
      </div>
    </section>
  );
}

export default Search;
