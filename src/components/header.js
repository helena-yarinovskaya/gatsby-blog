import { Link } from 'gatsby';
import React from 'react';
import Image from './image';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <nav>
        <Link className="header__item" to="#about-me">ABOUT ME</Link>
        <Link className="header__item" to="#portfolio">PORTFOLIO</Link>
        <Link to="/" className="header__logo">
          <Image file="logo.png" />
        </Link>
        <Link className="header__item" to="#my-blog">MY BLOG</Link>
        <Link className="header__item" to="#contact-me">CONTACT ME</Link>
      </nav>
    </div>
  </header>
);

export default Header;
