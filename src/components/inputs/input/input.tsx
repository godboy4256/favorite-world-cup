"use client";

import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./input.module.css";

type PropsType = {
  type?: "password" | "text" | "date";
  placeHorder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ type, placeHorder, onChange, value }: PropsType) => {
  return (
    <input
      autoComplete="new-password"
      type={type}
      value={value && value}
      onChange={onChange}
      placeholder={placeHorder}
      className={styles.container}
    />
  );
};

export default Input;
