import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

import styles from './Button.module.css';

const Button = ({style, text, type}) => {
    return(
        <button className={classNames(styles.button, style)} type={type}>{text}</button>
    );
};

Button.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
};

Button.defaultProps = {
    style: '',
    type: 'button',
};

export default Button;