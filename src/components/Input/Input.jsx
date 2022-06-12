import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({hidden, style, placeholder, maxLength, minLength, type, name, text, autocomplete, value, setValue}) => {
  return (
    <label className={classNames(style, styles.input, styles['trip-popup__input'])}>
      <span className={classNames(styles.input__heading, hidden)}>{text}</span>
      <input placeholder={placeholder} minLength={minLength} maxLength={maxLength} onChange={(event) => setValue(event.target.value)} value={value} name={name} type={type} autoComplete={autocomplete} required />
    </label>
  );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    autocomplete: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.string,
    hidden: PropTypes.string,
};

Input.defaultProps = {
    autocomplete: 'off',
    minLength: '',
    maxLength: '',
    placeholder: '',
    style: '',
    hidden: '',
};

export default Input;