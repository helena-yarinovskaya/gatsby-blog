import React from 'react';
import classNames from 'classnames';

const HeaderBlock = ({ title, subtitle, className }) => (
  <div className={classNames("header-block", className)}>
    <h2 className="header-block__title">{title}</h2>
    <div className="header-block__separator">
      <hr />
      <span>×××</span>
      <hr />
    </div>
    <div className="header-block__subtitle">{subtitle}</div>
  </div>
);

export default HeaderBlock;
