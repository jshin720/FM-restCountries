import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import countries from "../../data.json";
const url = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  const countriesSorted = countries.sort(
    (a, b) => a.name.common > b.name.common

  );

  const fetchCountryData = async () => {
    const res = await fetch(url);
    const countries = await res.json();
    console.log(countries)
    console.log(res)
    setCountries(countries);

  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  countries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });
  const removeCountry = (id) => {
    const newCountry = countries.filter((country) => country.id !== i)
    console.log(newCountry)
    // setCountries(newCountry);

    };
   
  console.log("aftermost", countries)
  return (
    <section className="country-grid">
      {countries.map((country, i) => {
        // const { flags, name } = country;
        console.log(country);


        return (
          <article key={i}>
            <div>
              <img src={flags.svg} alt={name.common} />
              <div className="country-info">
                <h3>
                  <span className="country-details-header">{name.common}</span>
                </h3>
                <h4>
                  Population:{" "}
                  <span className="country-details">{country.population}</span>
                </h4>
                <h4>
                  Region:{" "}
                  <span className="country-details">{country.region}</span>
                </h4>
                <h4>
                  Capital:{" "}
                  <span className="country-details">{country.capital}</span>
                </h4>
                <Link to={`/countries/${name}`}>Learn More</Link>
                <button className="country-btn" onClick={removeCountry(i)}>Remove Country</button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Countries;
