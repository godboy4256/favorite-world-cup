"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./register.module.css";
import Input from "@/components/inputs/input/input";
import Button from "@/components/inputs/button/button";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCkeck] = useState("");

  const onClickRegister = () => {
    if (password !== passwordCheck) {
      alert("비밀번호 확인이 틀렸습니다.");
      return;
    }
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
          placeHorder="사용할 이메일을 입력하세요."
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          value={password}
          type="password"
          placeHorder="비밀번호를 입력하세요."
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPasswordCkeck(e.target.value)
          }
          value={passwordCheck}
          type="password"
          placeHorder="비밀번호를 확인하세요."
        />
      </div>
      <Button onClick={onClickRegister} fullWidth text="회원가입" />
    </div>
  );
};

export default page;
