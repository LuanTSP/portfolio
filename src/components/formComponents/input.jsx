import React from "react";
import styles from "./input.module.css"

const Input = ({label, type, name, value, onChange, onBlur, error, placeholder}) => {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
      </label>
      <input 
        className={styles.input}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input