import React from 'react';
import "./header.css";

function header(props) {
  // const {setDarkMode, darkMode, toggleTheme} = props;
 
  // console.log(props)

  
  const changeTheme = () => {
    const moon = document.querySelector(".fa-moon");
    moon.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });
  }
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
            <i className='fas fa-moon' onClick={() => changeTheme()}></i>
          </h4>
        </div>

      </header>
    </>
  );
}

export default header;
