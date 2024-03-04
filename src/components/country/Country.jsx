import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([])

  
  return (
    <div>
      <Link to="/" className='btn btn-light'>Back to Home</Link>
      <h1>individual country information</h1>
    </div>
  );
}

export default Country;
