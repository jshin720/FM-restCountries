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
            border,
          } = c;
        })}
      </section>
    </div>
  );
};

export default Country;
