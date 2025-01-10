import React from "react";
import styles from "./button.module.css";

const Button = ({children, onClick, type, error}) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <p className={styles.error}>{error}</p>
    </>
  )
}

export default Button