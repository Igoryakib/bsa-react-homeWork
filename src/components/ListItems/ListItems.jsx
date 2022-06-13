import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

const ListItems = ({ booking, arrayItems, style, ArrayItem, onDeleteItem }) => {
  return (
    <>
      {booking ? (
        <ul className={style}>
          {arrayItems.map((item) => {
            return (
              <ArrayItem
                key={item.tripId}
                guests={item.guests}
                date={item.date}
                totalPrice={item.totalPrice}
                trip={item.trip}
                onClickDelete={() => onDeleteItem(item.tripId)}
              />
            );
          })}
        </ul>
      ) : (
        <ul className={style}>
          {arrayItems.map((item) => {
            return (
              <ArrayItem
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.image}
                duration={item.duration}
                price={item.price}
                level={item.level}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

ListItems.propTypes = {
  arrayItems: PropTypes.array.isRequired,
  style: PropTypes.string.isRequired,
  ArrayItem: PropTypes.func.isRequired,
  booking: PropTypes.bool,
  onDeleteItem: PropTypes.func,
};

ListItems.defaultProps = {
  booking: false,
  onDeleteItem: null,
};

export default ListItems;
