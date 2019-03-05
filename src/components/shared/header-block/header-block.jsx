import React from 'react';
import classNames from 'classnames';

import './header-block.scss';

const HeaderBlock = ({ title, subtitle, className }) => (
  <div className={classNames("header-block", className)}>
    <h2 className="header-block__title">{title}</h2>
    <div className="header-block__separator">
      <hr className="header-block__separator-line" />
      <span className="header-block__separator-text">×××</span>
      <hr className="header-block__separator-line" />
    </div>
    <div className="header-block__subtitle">{subtitle}</div>
  </div>
);

export default HeaderBlock;
