import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './expand-button.scss';

const ExpandButton = ({ text, className, onClick }) => (
  <div className={classNames('expand-btn', className)}>
    <hr className="expand-btn__line" />
    <div onClick={onClick}>{text}</div>
  </div>
);

ExpandButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ExpandButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default ExpandButton;
