import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={`${styles.footer} center_wrapper`}>
        <div>Email - godboy4256@gmail.com</div>
        <div>Phone - 010.9019.2172</div>
      </div>
    </footer>
  );
};

export default Footer;
