import React from "react";
import { Link } from "react-router-dom";
import styles from './repo.module.css'

const Repo = ({id, name, description, html_url}) => {
  return (
    <li key={id} className={styles.repo}>
      <Link to={html_url}>
        <div className={styles.name}>{name}</div>
        <div>{description}</div>
      </Link>
    </li>
  )
}

export default Repo