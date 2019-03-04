import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class CustomCarousel extends React.Component {
  render() {
    return (
      <div className="main-block">
        <div className="main-block__container">
          <h2>Retro</h2>
          <div className="main-block__ribbon">
            <div className="main-block__ribbon-main">Old Style Portfolio</div>
          </div>

          <div className="slider-container">
            <Carousel
              className="slider"
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              onChange={onChange}
              autoPlay={true}
            >
              <div>
                <img src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" />
              </div>
              <div>
                <img src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" />
              </div>
              <div>
                <img src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" />
              </div>
            </Carousel>
          </div>
          <div className="main-block__slider" />
          <p className="main-block__message main-block__message_main">"Hello, I am John Doe </p>
          <p className="main-block__message">Welcome to Retro, my wonderful theme!"</p>
        </div>
      </div>
    );
  }
}

export default CustomCarousel;
