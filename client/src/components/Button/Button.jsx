import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ handleClick, text, className }) {
    const classes = classNames(className);
    return (
        <button className={classes} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    handleClick: () => {},
    text: '',
    className: '',
};
