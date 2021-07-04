import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  name,
  pattern,
  title,
  value,
  handleInputChange,
  label,
}) => (
  <label className={styles.label}>
    {label}:
    <input
      className={styles.input}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
      value={value}
      onChange={handleInputChange}
      autoComplete="off"
    />
  </label>
);

export default Input;
