import React from 'react';
import { withPrefix } from 'gatsby';

import Anchor from '../shared/hidden-anchor/hidden-anchor';
import HeaderBlock from '../shared/header-block/header-block';

import './contact-me.scss';

const ContactMe = () => {
  return (
    <section className="contact-me" >
      <Anchor id="contact-me" />
      <hr className="contact-me__line" />
      <div className="contact-me__container">
        <HeaderBlock
          title="Contact me"
          subtitle="I'll be glad to answer yout questions!"
          className="contact-me__header"
        />
        <div className="contact-me__content">
          <form className="contact-me__form">
            <input className="contact-me__input" name="name" type="text" placeholder="Name" />
            <input className="contact-me__input" name="email" type="email" placeholder="Email address" />
            <input className="contact-me__input" name="subject" type="text" placeholder="Subject" />
            <textarea className="contact-me__textarea" placeholder="Your message" />
            <button type="submit" className="contact-me__form-button" onClick={e => e.preventDefault()}>
              Send Message
            </button>
          </form>
          <div className="contact-me__social-title">I am social</div>
          <hr className="contact-me__underline" />
          <div className="contact-me__social-links">
            <div className="contact-me__social-link">
              <a href="#">
                <img className="contact-me__social-icon" src={withPrefix('/images/social-icons/twitter.png')} alt="Twitter" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <img className="contact-me__social-icon" src={withPrefix('/images/social-icons/facebook.png')} alt="Facebook" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <img className="contact-me__social-icon" src={withPrefix('/images/social-icons/gplus.png')} alt="Google" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <img className="contact-me__social-icon" src={withPrefix('/images/social-icons/pinterest.png')} alt="Pinterest" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <img lassName="contact-me__social-icon" src={withPrefix('/images/social-icons/linkedin.png')} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="contact-me__line" />
    </section>
  );
};

export default ContactMe;
