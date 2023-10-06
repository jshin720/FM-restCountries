import React, {useState, useEffect} from 'react';
// import countries from "../../data.json";
const url = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const res = await fetch(url)
    const countries = await res.json()
    setCountries(countries)
    // console.log("count", countries);
    }

  useEffect(() => {
    fetchCountryData();
  }, []);





  return (
    <div>

    { countries.map((country) => {
      console.log(country)

      return(
        
      )
    })

    }
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
