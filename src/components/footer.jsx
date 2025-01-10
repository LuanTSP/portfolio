import React from "react";
import styles from './footer.module.css'
import { FaInstagram as InstaIcon} from "react-icons/fa";
import { FaGithub as GithubIcon} from "react-icons/fa";
import { FaFacebook as FaceIcon} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li><a href="https://www.instagram.com/_luanpacifico/"><InstaIcon />Instagram</a></li>
        <li><a href="https://www.facebook.com/luan.pacifico.9634"><FaceIcon />Facebook</a></li>
        <li><a href="https://github.com/LuanTSP"><GithubIcon />Github</a></li>
      </ul>
    </footer>
  )
}

export default Footer