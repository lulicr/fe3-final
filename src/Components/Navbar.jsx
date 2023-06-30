import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DH from "../DH.ico";
import { useContextGlobal } from '../Components/utils/global.context';
import themeIconl from '../images/modo-light.png';
import themeIcond from '../images/modo-oscuro.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { state, changeTheme } = useContextGlobal();
  const { theme } = state;

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <img src={DH} alt="DH Logo" />
      {/* <button onClick={() => navigate(-1)}> <h1> ATRAS </h1></button>*/}
      <Link to='/'><h4 className='link'>Home</h4></Link>
      <Link to='/contacto'><h4 className='link'>Contacto</h4></Link>
      <Link to='/favs'><h4 className='link'>Destacados</h4></Link>
      <button className={`theme-button ${theme}`} onClick={handleThemeChange}>
      <img src={theme === "dark" ? themeIconl : themeIcond} alt="Theme Icon" />
      </button>
    </nav>
  );
};

export default Navbar;
