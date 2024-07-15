"use client";

import Button from "@/components/inputs/button/button";
import Input from "@/components/inputs/input/input";
import React from "react";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <Input placeHorder="이메일을 입력하세요." />
        <Input type="password" placeHorder="비밀번호를 입력하세요." />
      </div>
      <Button text="로그인" />
    </div>
  );
};

export default LoginPage;
