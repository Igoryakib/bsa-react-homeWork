import React, { useState} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

const modalRef = document.querySelector('#root-modal');

const Modal = ({level, title, duration, onClickFn, price}) => {
    const [amountPeople, setAmountPeople] = useState(1);
    const [date, setDate] = useState('2022-06-14');
    return (
    createPortal(<div className={styles["modal"]}>
    <div className={styles["trip-popup"]}>
      <button onClick={onClickFn} className={styles["trip-popup__close"]}>×</button>
      <form className={styles["trip-popup__form"]} autoComplete="off">
        <div className={styles["trip-info"]}>
          <h3 className={styles["trip-info__title"]}>{title}</h3>
          <div className={styles["trip-info__content"]}>
            <span className={styles["trip-info__duration"]}>
              <strong>{duration}</strong> days
            </span>
            <span className={styles["trip-info__level"]}>{level}</span>
          </div>
        </div>
        <Input num minLength='2022-06-17' setValue={setDate} value={date} text="Date" style={styles['trip-popup__input']} type="date" name="date"/>
        <Input num text="Number of guests" style={styles['trip-popup__input']} setValue={setAmountPeople} value={amountPeople} name="guests" type="number" minLength={1} maxLength={10}/>
        <span className="trip-popup__total">
          Total: <output className="trip-popup__total-value">{price * amountPeople}$</output>
        </span>
        <Button type="submit" text="Book a trip"/>
      </form>
    </div>
  </div>, modalRef)
  );
};

Modal.propTypes = {
    level: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClickFn: PropTypes.func.isRequired,
};

export default Modal;
