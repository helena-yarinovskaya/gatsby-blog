import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import Anchor from 'src/components/shared/hidden-anchor/hidden-anchor';
import HeaderBlock from  'src/components/shared/header-block/header-block';
import ExpandButton from 'src/components/shared/expand-button/expand-button';

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
  <section className="portfolio">
    <hr className="portfolio__line" />
    <Anchor id="portfolio" />
    <div className="portfolio__container">
      <HeaderBlock title="Portfolio" subtitle="SIMPLICITY IS THE ULTIMATE SOPHISTICATION" />

      <div className="portfolio__filters">
        <div className="portfolio__filter-label">Filter by</div>
        <ul className="portfolio__filter-list">
          {tags.map((tag, i) => (
            <li className="portfolio__tag" key={`key${i}`}>
              <span className="portfolio__tag-label">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="portfolio__photos">
        <div className="portfolio__photos-container">
          {items.map((item, i) => (
            <div className="portfolio__photo-container" key={`key${i}`}>
              <div className="portfolio__photo">
                <div className="portfolio__image-container">
                  <img className="portfolio__image" src={withPrefix(`/images/${item.image}`)} alt="" />
                </div>
                <div className="portfolio__image-info">
                  <span className="portfolio__icon">
                    <img className="portfolio__icon-image" src={withPrefix(`/images/portfolio-icons/${item.icon}`)} alt="Icon" />
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
