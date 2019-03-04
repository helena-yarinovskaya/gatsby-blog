import React from 'react';

import Image from './image';
import HeaderBlock from './shared/header-block';

const ContactMe = () => {
  return (
    <section className="contact-me" id="contact-me">
      <hr className="contact-me__line" />
      <div className="contact-me__container">
        <HeaderBlock title="Contact me" subtitle="I'll be glad to answer yout questions!" className="contact-me__header" />
        <div className="contact-me__content">
          <form className="contact-me__form">
            <input className="contact-me__input" name="name" type="text" placeholder="Name" />
            <input className="contact-me__input" name="email" type="email" placeholder="Email address" />
            <input className="contact-me__input" name="subject" type="text" placeholder="Subject" />
            <textarea className="contact-me__textarea" placeholder="Your message" />
            <button type="submit" className="contact-me__form-button" onClick={(e)=>e.preventDefault()}>
              Send Message
            </button>
          </form>
          <div className="contact-me__social-title">I am social</div>
          <hr className="contact-me__underline" />
          <div className="contact-me__social-links">
            <div className="contact-me__social-link">
              <a href="#">
                <Image className="contact-me__social-icon" file="twitter.png" alt="Twitter" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <Image className="contact-me__social-icon" file="facebook.png" alt="Facebook" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <Image className="contact-me__social-icon" file="gplus.png" alt="Google" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <Image className="contact-me__social-icon" file="pinterest.png" alt="Pinterest" />
              </a>
            </div>
            <div className="contact-me__social-link">
              <a href="#">
                <Image file="linkedin.png" alt="LinkedIn" />
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
