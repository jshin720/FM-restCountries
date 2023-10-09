import React, { useState, useEffect } from "react";
// import countries from "../../data.json";
const url = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const res = await fetch(url);
    const countries = await res.json();
    setCountries(countries);
    // console.log("count", countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div>
      {countries.map((country, i) => {
        const { flags, name } = country;
        // console.log(country)

        return (
          <section className="country-grid">
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
                  Capital: <span>{country.capital}</span>
                </h4>
              </div>
            </article>
          </section>
        );
      })}
      {/* <button className='back-button'>back</button>
      <div>
        <div className="img-container">
          <h4>flag img</h4>
        </div>
        <div className="info-container">
          <div>
            <h4>country name</h4>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div>border countries</div>
      </div> */}
    </div>
  );
}

export default Countries;
