import React from "react";
import styles from "./header.module.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/"><h1 className="title">Luan Pacifico</h1></Link>
      <nav className={styles.navigation}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header