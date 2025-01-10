import React from "react";
import styles from "./textArea.module.css"

const TextArea = ({label, rows, cols, name, placeholder, value, onChange, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label 
        className={styles.label}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className={styles.textArea}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default TextArea