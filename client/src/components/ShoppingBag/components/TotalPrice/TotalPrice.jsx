import React from 'react';
import PropTypes from 'prop-types';
import styles from './TotalPrice.module.scss';

const Header = (props) => {
    const { totalPrice } = props;
    return <p className={styles.totalPrice}>TOTAL USD ${totalPrice}</p>;
};

Header.propTypes = { totalPrice: PropTypes.string };

export default Header;
