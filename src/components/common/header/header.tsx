"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Button from "@/components/inputs/button/button";
import { LogOutGoogle, LoginGoogle } from "../../../../lib/firebase/auth";

const Header = () => {
  const [isUser, setIsUser] = useState(
    sessionStorage.getItem("uid") ? true : false
  );

  const onClickLogin = () => {
    LoginGoogle(setIsUser);
  };

  const onClickLogOut = () => {
    LogOutGoogle(setIsUser);
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} center_wrapper`}>
        <h1 className={styles.logo}>
          <img src="/images/cup_logo.svg" alt="header logo" />
          Cup Game
        </h1>
        <div>
          {sessionStorage.getItem("displayName") && (
            <div>
              <span>{sessionStorage.getItem("displayName")}</span>님 환영합니다.
            </div>
          )}
          <div>다양한 주제를 가진 이상형 월드컵을 플레이 하세요!</div>
        </div>
        {isUser ? (
          <Button onClick={onClickLogOut} text="로그아웃" />
        ) : (
          <Button onClick={onClickLogin} text="Google 로그인" />
        )}
      </div>
    </header>
  );
};

export default Header;
