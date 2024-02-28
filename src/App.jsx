import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Countries from "./components/countries/Countries.jsx";
import Search from "./components/search/Search";
import Country from "./components/country/Country.jsx";

export const ThemeContext = createContext(null);

function App() {
  const [keyword, setKeyWord] = useState("");
  const [filter, setFilter] = useState("");
  const [searchType, setSearchType] = useState(null);
  const [darkMode, setDarkMode] = useState("light");

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

  const handleOnChange = (e) => {
    // console.log("e", e.target.id);

    setSearchType(e.target.id);
    // console.log("searchType-before", searchType, filter, keyword);

    if (searchType === "search") {
      setKeyWord(e.target.value);
      setFilter("default");
    } else {
      setFilter(e.target.value);
      setKeyWord("");
    }
    console.log("searchType-after", searchType, filter, keyword);
  };

  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Header /> 
      {/* above the route so it becomes a universal component */}
      <Route exact path= "/">
        <Search />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country/>}>
      </Route>
    </Router>
    // <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    //   <div className="App" id={darkMode}>
    //     <Header
    //       setDarkMode={setDarkMode}
    //       darkMode={darkMode}
    //       toggleTheme={toggleTheme}
    //     />
    //     <h1>page loading</h1>
    //     <div className="switch"></div>
    //     <input
    //       type="text"
    //       name="search"
    //       id="search"
    //       placeholder="Search For A Country"
    //       value={keyword}
    //       onChange={handleOnChange}
    //     />
    //     <label htmlFor="filter">Filter by Region</label>
    //     <select
    //       name="filter"
    //       id="filter"
    //       value={filter}
    //       onChange={handleOnChange}
    //     >
    //       {options.map((option, i) => (
    //         <option value={option.value} key={i}>
    //           {option.label}
    //         </option>
    //       ))}
    //     </select>
    //     <div>
    //       <Search keyword={keyword} filter={filter} searchType={searchType} />
    //     </div>
    //   </div>
    // </ThemeContext.Provider>

    // <Routes>
    //   <Route path="/countries" component={Search} />
    //   <Route path="/countries/:id" component={Country} />
    // </Routes>
  );
}

export default App;
