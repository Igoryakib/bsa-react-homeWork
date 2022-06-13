import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import tripStyles from '../../components/TripItem/TripItem.module.css';

import trips from '../../db/trips.json';

import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import TripItem from "../../components/TripItem/TripItem";
import ListItems from "../../components/ListItems/ListItems";

const HomePage = () => {
const [arrayItems, setArrayItems] = useState(trips);
const [filter, setFilter] = useState('');
const [selectedLevel, setSelectedLevel] = useState('');
const [selectedDuration, setSelectedDuration] = useState('');
useEffect(() => {
  if(filter) {
    const filteredTrips = arrayItems.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    return setArrayItems(filteredTrips);
  }
  if(selectedLevel) {
    const filteredTrips = arrayItems.filter(item => item.level === selectedLevel);
    return setArrayItems(filteredTrips);
  }
  if (selectedDuration) {
    if(selectedDuration === '0_x_5') {
      const filteredTrips = arrayItems.filter(item => item.duration < 5);
      return setArrayItems(filteredTrips);
    }
    if(selectedDuration === '5_x_10') {
      const filteredTrips = arrayItems.filter(item => item.duration < 10);
      return setArrayItems(filteredTrips);
    }
    if(selectedDuration === '10_x') {
      const filteredTrips = arrayItems.filter(item => item.duration >= 10);
      return setArrayItems(filteredTrips);
    }
  }
  if(filter === '' || selectedDuration === '' || selectedLevel === '') {
    return setArrayItems(trips);
  }
}, [filter, selectedLevel, selectedDuration]);
  return (
    <main>
      <section className={styles["trips-filter"]}>
        <form className={styles["trips-filter__form"]} autoComplete="off">
          <Input
            style={styles["trips-filter__search"]}
            setValue={setFilter}
            value={filter}
            hidden="visually-hidden"
            placeholder="search by name"
            name="search"
            type="search"
            text="Search by name"
          />
          <Select
            valueChange={selectedDuration}
            setChange={setSelectedDuration}
            text="Search by duration"
            value1={''}
            textOption1="duration"
            value2={"0_x_5"}
            textOption2="&lt; 5 days"
            value3={"5_x_10"}
            textOption3="&lt; 10 days"
            value4={"10_x"}
            textOption4="&ge; 10 days"
          />
          <Select
          valueChange={selectedLevel}
           setChange={setSelectedLevel}
            text="Search by level"
            value1={''}
            textOption1="level"
            value2={"easy"}
            textOption2="easy"
            value3={"moderate"}
            textOption3="moderate"
            value4={"difficult"}
            textOption4="difficult"
          />
        </form>
      </section>
      <section className={styles.trips}>
        <ListItems ArrayItem={TripItem} style={tripStyles['trip-list']} arrayItems={arrayItems} />
      </section>
    </main>
  );
};

export default HomePage;
