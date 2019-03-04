import React from 'react';
import Ribbon from './shared/ribbon';

const MainBlock = () => (
    <section className="main-block">
        <hr className="main-block__line" />
        <div className="main-block__container">
            <h1>Retro</h1>
            <div className="main-block__ribbon-container">
                <div className="main-block__ribbon-dots main-block__ribbon-dots_left">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Ribbon text={'Old Style Portfolio'} />
                <div className="main-block__ribbon-dots main-block__ribbon-dots_right">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="slider-container">
            </div>
            <div className="main-block__slider"></div>
            <p className="main-block__message main-block__message_main">"Hello, I am John Doe </p>
            <p className="main-block__message">Welcome to Retro, my wonderful theme!"</p>
        </div>
        <hr className="main-block__line" />
    </section>
);

export default MainBlock;
