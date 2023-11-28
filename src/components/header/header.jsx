import React from 'react';
import "./header.css";

function header(props) {
  const {setDarkMode, darkMode, toggleTheme} = props;

  // console.log(props)


  return (
    <>
      <header className='countries-header'>
        <div>
          <h1>
            where in the world?
          </h1>
        </div>
        <div>
          <h4>
            moon image button for dark mode
          </h4>
        </div>

      </header>
    </>
  );
}

export default header;
