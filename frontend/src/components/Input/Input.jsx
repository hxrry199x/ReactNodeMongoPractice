import React from "react";
import styles from "./Input.module.css";

function Input({ type, placeholder, value, onChange, icon }) {
  return (
    <div className={styles.inputContainer}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
