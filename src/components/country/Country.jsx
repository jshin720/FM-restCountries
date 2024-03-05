import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([]);
  const {name} = useParams()


useEffect(() => {
  const fetchCountry = async() => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`
    );
    const country = await res.json();
    console.log(country)
    setCountry([...country]); 
  }
  fetchCountry();
}, [])

  return (
    <div>
      <Link to="/" className='btn btn-light'>Back to Home</Link>
      <h1>individual country information</h1>
    </div>
  );
}

export default Country;
