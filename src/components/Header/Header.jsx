import React, { useContext } from "react";

// Importing styles
import "./styles.sass";

// Context
import DataContext from "../../contexts/DataContext";
const Header = () => {
  const { theme, setTheme } = useContext(DataContext);
  const changeTheme = () => {
    setTheme(!theme);
  };
  document.body.style.background = theme ? "black" : "white";
  return (
    <header>
      <img src="/src/assets/fwt_logo.svg" alt="#" />
      <img
        src={`/src/assets/${theme ? "night-light" : "light"}.svg`}
        alt=""
        onClick={() => changeTheme()}
      />
    </header>
  );
};

export default Header;
