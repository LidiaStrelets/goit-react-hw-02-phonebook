import React from "react";
import styles from "./ButtonAdd.module.css";

const ButtonAdd = ({ handleClick }) => (
  <button className={styles.addBtn} type="submit">
    Add contact
  </button>
);

export default ButtonAdd;
