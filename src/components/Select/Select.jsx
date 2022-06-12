import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";

import Option from "../Option/Option";

const Select = ({text, value1, value2, value3, value4, textOption1, textOption2, textOption3, textOption4}) => {
  return (
    <label className={styles["select"]}>
      <span className="visually-hidden">{text}</span>
      <select name="duration">
      <Option value={value1} text={textOption1}/>
      <Option value={value2} text={textOption2}/>
      <Option value={value3} text={textOption3}/>
      <Option value={value4} text={textOption4}/>
      </select>
    </label>
  );
};

Select.propTypes = {
    text: PropTypes.string.isRequired,
    value1: PropTypes.string.isRequired,
    textOption1: PropTypes.string.isRequired,
    value2: PropTypes.string.isRequired,
    textOption2: PropTypes.string.isRequired,
    value3: PropTypes.string.isRequired,
    textOption3: PropTypes.string.isRequired,
    value4: PropTypes.string.isRequired,
    textOption4: PropTypes.string.isRequired,
};

export default Select;
