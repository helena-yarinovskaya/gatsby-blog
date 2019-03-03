import React from 'react'

const HeaderBlock = ({ title, subtitle }) => (
    <div className="header-block">
        <h2 className="header-block__title">{title}</h2>
        <div className="header-block__separator">
            <hr />
            <span>×××</span>
            <hr />
        </div>
        <div className="header-block__subtitle">{subtitle}</div>
    </div>
)

export default HeaderBlock
