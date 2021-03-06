import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const formatResponces = count => (!count ? 'No responces' : `${count} responce${count > 1 ? 's' : ''}`);
const formatTags = tags => (tags && tags.length ? tags.join(',  ') : '');

class Post extends React.Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    responses: PropTypes.number.isRequired,
  };

  static defaultProps = {
    tags: [],
    image: null,
  };

  state = {
    expanded: false,
  };

  onExpandClick = () => {
    const { expanded } = this.state;

    this.setState({ expanded: !expanded });
  };

  render() {
    const { image, text, title, responses, date, author, tags } = this.props;
    const { expanded } = this.state;

    return (
      <div className="post">
        <div className="post__photo">
          <div className="post__photo-container">{image && <img className="post__image" src={image} alt="" />}</div>
        </div>
        <div className="post__info">
          <h3 className="post__title">{title}</h3>
          <div className="post__additional-info">
            <div className="post__info-block post__info-block_left">
              {date} // {author} // {formatTags(tags)}
            </div>
            <div className="post__info-block">{formatResponces(responses)}</div>
          </div>
          <hr className="post__line" />
          <div className="post__text">
            {text}
            {expanded && <span className="post__hidden-text">{text}</span>}
            <span className="post__expand-btn" onClick={this.onExpandClick}>
              ({expanded ? 'LESS' : 'MORE'}…)
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
