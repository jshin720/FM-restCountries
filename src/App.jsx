import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/main.jsx";
import Index from "./components/index/Index.jsx";
import Search from "./components/search/Search";

import countries from "./data.json";


function App() {
  const [keyword, setKeyWord] = useState('');
  const [filter, setFilter] = useState("");
  const [searchType, setSearchType] = useState(null);

 const options = [
   {
     label: "Pick a Region",
     value: "default",
   },
   {
     label: "Africa",
     value: "Africa",
   },
   {
     label: "Americas",
     value: "Americas",
   },
   {
     label: "Asia",
     value: "Asia",
   },
   {
     label: "Europe",
     value: "Europe",
   },
   {
     label: "Oceania",
     value: "Oceania",
   },
 ];

 console.log("option", options)

  const handleOnChange = (e) => {
    console.log("e", e.target.id);

    setSearchType(e.target.id);
    // console.log("searchType-before", searchType, filter, keyword)

    if (searchType === "search") {
      setKeyWord(e.target.value);
      setFilter("default")
    } else {
      setFilter(e.target.value);
      setKeyWord("")
    }
    // console.log("searchType-after", searchType, filter, keyword);
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
      
      <select name="filter" id="filter" value={filter} onChange={handleOnChange}>
        {options.map((option, i) => 
          <option value={option.value} key={i}>{option.label}</option>
        )}
      </select>

      <div>
       
          <Search keyword={keyword} filter={filter} searchType={searchType} />
        
      </div>
    </>
  );
}

export default App;
