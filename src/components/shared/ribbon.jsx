import React from 'react';

const Ribbon = ({ text }) => (
  <div className="ribbon">
    <hr className="ribbon__line" />
    <div className="ribbon__content">{text}</div>
    <hr className="ribbon__line" />
  </div>
);

export default Ribbon;
