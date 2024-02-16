import React, { useState } from "react";
import "./header.css"

const Header = ({ darkMode, setDarkMode }) => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })
// import Darkmode from "../darkmode/DarkMode";

   
    // -----------  Toggle Menu    --------
const[Toggle , showmenu] = useState(false);
const [activeNav, setActiveNav] = useState('#home')
  return (
    <header className="header">
      <nav className="nav container" >
        <a href="index.html" className="nav__logo">
          Codez
        </a>

        <div className={Toggle ? "nav__menu show-menu "  :  "nav__menu"} onClick={ () => showmenu(!Toggle)}>
          <ul className="nav__list grid">
            <li className="nav__item">
            <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active__link' : 'nav__link'
                }
              >
               <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
              <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
            <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
              <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
            <a
                href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={
                  activeNav === '#projects'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
              <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
          
            <li className="nav__item">
              <a
                href="#blogs"
                onClick={() => setActiveNav('#blogs')}
                className={
                  activeNav === '#blogs'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Blogs
              </a>
            </li>



            <li className="nav__item">
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
              <i className="uil uil-message nav__icon"></i> Contact Us
              </a>
            </li>

            <div className="containerr">
              <span style={{ color: darkMode ? 'gray' : 'gray' }}>☽</span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <span style={{ color: darkMode ? '#c96dfd' : 'yellow' }}>☀︎</span>
            </div>
          </ul>
                          {/* <i className="uil uil-times nav__close" 
                            onClick={ () => showmenu(!Toggle)}
                            ></i> */}
        </div>
              {/* <Darkmode/> */}
                <div className="nav__toggle" onClick={ () => showmenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>


      </nav>
    </header>
  );
}

export default Header;
