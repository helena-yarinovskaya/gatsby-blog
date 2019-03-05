import React from 'react';
import PropTypes from 'prop-types';

import './hidden-anchor.scss';

const Anchor = ({ id }) => (
    <a className="anchor" id={id} >&#8203;</a>
);

Anchor.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Anchor;
