import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import routes from "../../utils/routes";

import Button from "../Button/Button";

import styles from "./Navigation.module.css";
import user from "../../static/user.svg";
import briefcase from "../../static/briefcase.svg";

const Navigation = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles['nav-header__list']}>
        <NavLink className={styles['nav-header__item']} to={routes.bookingsPage}>
          <li className={styles['nav-header__inner']} title="Bookings">
            <span className="visually-hidden">Bookings</span>
            <img src={briefcase} alt="icon" />
          </li>
        </NavLink>
        <li className={styles['nav-header__item']} title="Profile">
          <div
            className={classNames(styles['nav-header__inner'], styles['profile-nav'])}
            tabIndex="0"
          >
            <span className="visually-hidden">Profile</span>
            <img src={user} alt="profile icon" />
            <ul className={styles['profile-nav__list']}>
              <li
                className={classNames(
                  styles['profile-nav__item'],
                  styles['profile-nav__username']
                )}
              >
                John Doe
              </li>
              <li className={styles['profile-nav__item']}>
                <Button text="Sign Out" style={styles['profile-nav__sign-out']} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
