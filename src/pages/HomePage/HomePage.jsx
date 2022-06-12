import React, { useState } from "react";
import styles from "./HomePage.module.css";

import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

const HomePage = () => {
const [filter, setFilter] = useState('');
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
            text="Search by duration"
            value1={" "}
            textOption1="duration"
            value2={"0_x_5"}
            textOption2="&lt; 5 days"
            value3={"5_x_10"}
            textOption3="&lt; 10 days"
            value4={"10_x"}
            textOption4="&ge; 10 days"
          />
          <Select
            text="Search by level"
            value1={" "}
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
    </main>
  );
};

export default HomePage;
