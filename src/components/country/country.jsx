import React, { useState, useEffect } from "react";
// import countries from "../../data.json";
const url = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  const countriesSorted = countries.sort((a, b) => a.name.common > b.name.common)


  const fetchCountryData = async () => {
    const res = await fetch(url);
    const countries = await res.json();
    setCountries(countries);
    // console.log("count", countries);
    const countriesSorted = countries.sort(
      (a, b) => a.name.common < b.name.common
    );

    console.log("sorted", countriesSorted);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <section className="country-grid">
      {countries.map((country, i) => {
        const { flags, name } = country;
        // console.log(country)

        return (
          <article key={i}>
            <div>
              <img src={flags.svg} alt={name.common} />
              <h3>
                <span>{name.common}</span>
              </h3>
              <h4>
                Population: <span>{country.population}</span>
              </h4>
              <h4>
                Region: <span>{country.region}</span>
              </h4>
              <h4>
                {/* Capital: <span>{country.capital}</span> */}
              </h4>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Countries;
