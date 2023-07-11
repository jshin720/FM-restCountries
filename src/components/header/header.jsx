import React from 'react';

function header(props) {
  const {setDarkMode} = props;

  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h4>Where in the world?</h4>
      <div>
        <span>moon img</span>
        <button ></button>
      </div>

    </div>
  );
}

export default header;
