import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import HeaderBlock from '../shared/header-block/header-block';
import ExpandButton from '../shared/expand-button/expand-button';

import './portfolio.scss';

const tags = ['design', 'logo', 'photography', 'poster', 'resources', 'retro', 't-shirt', 'videos'];

const items = [
  {
    label: 'Galleries are funny',
    image: 'red-cat.jpg',
    icon: 'photo.png',
  },
  {
    label: 'A vimeo reel',
    image: 'red-cat.jpg',
    icon: 'tv.png',
  },
  {
    label: 'love for old cameras',
    image: 'red-cat.jpg',
    icon: 'sound.png',
  },
  {
    label: 'Detailed project page',
    image: 'red-cat.jpg',
    icon: 'note.png',
  },
  {
    label: 'Youtube video',
    image: 'red-cat.jpg',
    icon: 'tv.png',
  },
  {
    label: 'Another external link',
    image: 'red-cat.jpg',
    icon: 'note.png',
  },
  {
    label: 'A lighbox image',
    image: 'red-cat.jpg',
    icon: 'photo.png',
  },
  {
    label: 'The dark tempest',
    image: 'red-cat.jpg',
    icon: 'photo.png',
  },
];

const Portfolio = ({ tags }) => (
  <section className="portfolio" id="portfolio">
    <hr className="portfolio__line" />
    <div className="portfolio__container">
      <HeaderBlock title="Portfolio" subtitle="SIMPLICITY IS THE ULTIMATE SOPHISTICATION" />

      <div className="portfolio__filters">
        <div className="portfolio__filter-label">Filter by</div>
        <ul>
          {tags.map((tag, i) => (
            <li className="portfolio__tag" key={i}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="portfolio__photoes">
        <div className="portfolio__photoes-container">
          {items.map((item, i) => (
            <div className="portfolio__photo-container" key={i}>
              <div className="portfolio__photo">
                <div className="portfolio__image">
                  <Image file={item.image} alt="" />
                </div>
                <div className="portfolio__image-info">
                  <span className="portfolio__icon">
                    <Image file={item.icon} alt="" />
                  </span>
                </div>
                <p className="portfolio__label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <ExpandButton text="Browse all" />
      </div>
    </div>
    <hr className="portfolio__line" />
  </section>
);

Portfolio.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Portfolio.defaultProps = {
  tags: tags,
};

export default Portfolio;
