import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TripDetailPage.module.css";
import trips from "../../db/trips.json";

import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const TripDetailPage = () => {
  const { tripId } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { image, title, duration, level, description, price } = trips.find(
    (item) => item.id === tripId
  );
  return (
    <>
      <main className={styles["trip-page"]}>
        <div className={styles["trip"]}>
          <img src={image} className={styles["trip__img"]} alt="trip image" />
          <div className={styles["trip__content"]}>
            <div className={styles["trip-info"]}>
              <h3 className={styles["trip-info__title"]}>{title}</h3>
              <div className={styles["trip-info__content"]}>
                <span className={styles["trip-info__duration"]}>
                  <strong>{duration}</strong> days
                </span>
                <span className={styles["trip-info__level"]}>{level}</span>
              </div>
            </div>
            <div className={styles["trip__description"]}>{description}</div>
            <div className={styles["trip-price"]}>
              <span>Price</span>
              <strong className={styles["trip-price__value"]}>{price} $</strong>
            </div>
            <Button
            onClickFn={() => setIsOpenModal(!isOpenModal)}
              text="Book a trip"
              style={styles["trip__button"]}
              type="button"
            />
          </div>
        </div>
      </main>
      {isOpenModal && <Modal price={price} onClickFn={() => setIsOpenModal(!isOpenModal)} title={title} duration={duration} level={level}/>}
    </>
  );
};

export default TripDetailPage;
