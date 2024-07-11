import React from "react";
import styles from "./header.module.css";
import Button from "@/components/inputs/button/button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} center_wrapper`}>
        <h1 className={styles.logo}>
          <img src="./images/cup_logo.svg" alt="header logo" />
          Cup Game
        </h1>
        <div>다양한 주제를 가진 이상형 월드컵을 플레이 하세요!</div>
        <div>
          <Button text="로그인" />
          <Button text="회원가입" />
        </div>
      </div>
    </header>
  );
};

export default Header;
