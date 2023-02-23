import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { totalPrice } = props;
    return <p>TOTAL USD ${totalPrice}</p>;
};

Header.propTypes = { totalPrice: PropTypes.string };

export default Header;
