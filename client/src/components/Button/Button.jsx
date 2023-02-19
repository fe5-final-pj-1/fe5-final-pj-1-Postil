import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleClick, text, background, color, border, borderRadius, padding }) {
    return (
        <button style={{ background, color, border, borderRadius, padding }} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    padding: PropTypes.oneOf(PropTypes.string, PropTypes.number),
};

Button.defaultProps = {
    handleClick: () => {},
    text: '',
    background: 'transparent',
    color: '#000000',
    border: 'none',
    borderRadius: 'none',
    padding: 0,
};
