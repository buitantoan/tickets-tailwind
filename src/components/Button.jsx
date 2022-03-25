import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnClass, text, onClick}) => {
    return (
        <button 
            className={btnClass}
            onClick={onClick}
        >
        {text}   
        </button>
    );
}

Button.defaultProps = {
    btnClass: 'btn',
}

Button.propTypes = {
    btnClass: PropTypes.string, 
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;

