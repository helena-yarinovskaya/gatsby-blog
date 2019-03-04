import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ExpandButton = ({ text, className, onClick }) => (
  <div className={classNames('expand-btn', className)}>
    <hr />
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
