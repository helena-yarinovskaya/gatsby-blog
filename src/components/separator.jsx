import React from 'react';
import classNames from 'classnames';

const Separator = ({ className }) => (
  <div className={classNames('separator', className)}>
    <hr className="separator__line" />
    <span>×××</span>
    <hr className="separator__line" />
  </div>
);

export default Separator;
