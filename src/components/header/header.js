import { Link } from 'gatsby';
import React from 'react';
import {withPrefix} from 'gatsby';

import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <nav>
        <div className="header__items">
        <Link className="header__item" to="#about-me">ABOUT ME</Link>
        <Link className="header__item" to="#portfolio">PORTFOLIO</Link></div>   
        <Link to="/" className="header__logo">
          <img src={withPrefix('/images/logo.png')} alt="Logo" />
        </Link>
        <div className="header__items">
        <Link className="header__item" to="#my-blog">MY BLOG</Link>
        <Link className="header__item" to="#contact-me">CONTACT ME</Link></div>
      </nav>
    </div>
  </header>
);

export default Header;
