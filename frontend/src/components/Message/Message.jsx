import React from "react";
import styles from "./Message.module.css";

function Message({ text, type }) {
  return <p className={`${styles.message} ${type === "success" ? styles.success : styles.error}`}>{text}</p>;
}

export default Message;
