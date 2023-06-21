import React from 'react';
import Countries from "../../data.json"

function Search({keyword}) {

  console.log(keyword)

  const searchResults = () => {

    const results = Countries.filter((country) => country.name.toLowerCase().includes(keyword.toLowerCase()))
    console.log('results', results)
    
  }

  return (
    <div>
      {searchResults()}
    </div>
  );
}

export default Search;
