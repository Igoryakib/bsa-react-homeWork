import React, { useState, useEffect } from "react";
import styles from "./BookingsPage.module.css";
import bookings from '../../db/bookings.json';

import ListItems from "../../components/ListItems/ListItems";
import BookingItem from "../../components/BookingItem/BookingItem";

const BookingsPage = () => {
    const [bookingsArray, setBookingsArray] = useState(bookings);
    useEffect(() => {
        setBookingsArray(bookingsArray.sort((a, b) => new Date(b.date).getMonth() - new Date(a.date).getMonth()))
    }, []);
    const onHandleDelete = (bookingId) => {
       return setBookingsArray(bookingsArray.filter(item => item.tripId !== bookingId));
    };
    return(
        <main className={styles['bookings-page']}>
        <ListItems onDeleteItem={onHandleDelete} ArrayItem={BookingItem} arrayItems={bookingsArray} booking style={styles['bookings__list']} />
        </main>
    );
};


export default BookingsPage;