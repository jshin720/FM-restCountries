import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const country = await res.json();
      setCountry([...country]);
      console.log(country);
    };
    fetchCountry();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to Home
      </Link>
      <h1>individual country information</h1>
      <section className="country">
        {country.map((c) => {
          const {
            id,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <article key={id}>
              <div className="flag">
                <img src={flag} alt={`Flag of ${name}`} />
              </div>
              <div className="country-detail">
                <h2>{`${name} `}</h2>
                <h5>Population: {population}</h5>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion} </p>
                <h3>Capital: {capital}</h3>
                <p>Language: {languages[0].name} </p>
                <p>
                  Currency: {currencies[0].code}, Exchange Rate:
                  {`${currencies[0].exchangeRate} ${currencies[0].unit}`}{" "}
                </p>

                <h4>
                  Border Countries:{" "}
                  {borders ? `${borders.length} countries` : "No Border"}
                </h4>

                <br />
              </div>
              <div className="country-inner">
                <h5>
                  Top Level Domain: <span>{topLevelDomain}</span>
                </h5>
                <h5>Native Name: {nativeName}</h5>
                <h5>
                  Currencies <span>{currencies}</span>
                </h5>
                <h5>
                  Languages <span>{languages}</span>
                </h5>
              </div>
              <div>
                <h3>Bordering Countries :</h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Country;
