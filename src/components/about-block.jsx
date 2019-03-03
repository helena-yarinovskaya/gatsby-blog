import React from 'react'

import Image from './image'
import HeaderBlock from './header-block'

const AboutBlock = () => (
  <section className="about" id="about-me">
    <hr className="about__line" />
    <div className="container">
      <HeaderBlock title="ABOUT ME" subtitle="I am a graphic designer from Baltimore" />
      <div className="about__content">
        <div className="about__item">
          <div className="about__item-image">
            <Image file="movies.png" alt="Movies" />
          </div>
          <h4 className="about__item-title">Movies</h4>
          <p className="about__item-subtitle">What I watch</p>
          <hr />
          <p className="about__item-content">
            Clutter is honest! I do believe that has to the users <strong>selfexpression</strong>. Care. Things which
            is a projector operating system such formats are deep and profound and meaningful. It's the traditions of
            data. Good design should be different levels. There's no rational alternative. That's come to complexity.
            </p>
        </div>
        <div className="about__item">
          <div className="about__item-image">
            <Image file="music.png" alt="test" />
            <p className="about__item-title">Music</p>
          </div>

          <p className="about__item-subtitle">What I listen</p>
          <hr />
          <p className="about__item-content">
            Good design. The content, you'll love <strong>powerpoint should be different</strong>. It's about design
            is that part? Good design is making something looks. And aesthetic. And colour defines your interface.
            That cannot be overtly different. That has to chance. And restrained, low resolution, but you get rid of
            materials.
            </p>
        </div>
        <div className="about__item">
          <div className="about__item-image">
            <Image file="clothes.png" alt="Clothes" />
          </div>
          <h4 className="about__item-title">Clothes</h4>
          <p className="about__item-subtitle">What I wear</p>
          <hr />
          <p className="about__item-content">
            Very honest approach and product. The <a className="about__item-content_dotted" href="#">other product</a> that changes 
            function like the absence of function. And frustrating that products that it's the functional
            imperative, we kept going and frustrating that we are about bringing order to be better and less
            complicated to understand.
            </p>
        </div>
        <div className="about__item">
          <div className="about__item-image">
            <Image file="food.png" alt="Food" />
          </div>
          <h4 className="about__item-title">Food</h4>
          <p className="about__item-subtitle">What I eat</p>
          <hr />
          <p className="about__item-content">
            Simplicity. Its context. From so many different levels. There's real simplicity is. Designing and place of
              the objects we're surrounded by seem trivial. There's <strong>no rational alternative</strong>. I think
      that's a very complicated problems without letting people have a very easy to mean so much that
      acknowledges.
            </p>
        </div>
      </div>
    </div>
    <hr className="about__line" />
  </section>
)

export default AboutBlock;

