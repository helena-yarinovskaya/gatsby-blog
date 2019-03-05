import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import './slider.scss';

const slides = [
  {
    image: 'https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg',
    label: 'KODAK KAMERA 1',
  },
  {
    image: 'https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
    label: 'KODAK KAMERA 2',
  },
  {
    image: 'https://cdn-images-1.medium.com/max/2000/1*pebHcMtkJzOlopMuQfKtEA.jpeg',
    label: 'KODAK KAMERA 3',
  },
];

class Slider extends React.Component {
  state = {
    current: 0,
  };

  onNextSlideClick = () => {
    const { current } = this.state;

    if (current === 0) {
      return this.setState({
        current: slides.length - 1,
      });
    }

    this.setState({
      current: current - 1,
    });
  };

  onPrevSlideClick = () => {
    const { current } = this.state;

    if (current === slides.length - 1) {
      return this.setState({
        current: 0,
      });
    }

    this.setState({
      current: current + 1,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <div className="slider">
        <div className="slider__container">
          {slides.map((slide, i) => (
            <div
              className={classNames('slider__slide', {
                slider__slide_hidden: current !== i,
              })}
              key={`key${i}`}
            >
              <img src={slide.image} alt="" />
            </div>
          ))}

          <div className="slider__arrow slider__arrow_left" onClick={this.onPrevSlideClick}>
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </div>

          <div className="slider__arrow slider__arrow_right" onClick={this.onNextSlideClick}>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </div>
        </div>
        <div className="slider__label">{slides[current].label}</div>
      </div>
    );
  }
}

export default Slider;
