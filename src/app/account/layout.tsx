"use client";

import React from "react";
import styles from "./account.module.css";
import { usePathname } from "next/navigation";

type titleType = {
  "/account/login": string;
  "/account/register": string;
  [key: string]: string;
};

type linksType = {
  "/account/login": { title: string; path: string }[];
  "/account/register": { title: string; path: string }[];
  [key: string]: { title: string; path: string }[];
};

const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const title: titleType = {
    "/account/login": "로그인",
    "/account/register": "회원가입",
  };

  const links: linksType = {
    "/account/login": [
      { title: "회원가입", path: "/" },
      { title: "계정 찾기", path: "/" },
    ],
    "/account/register": [
      { title: "로그인", path: "/" },
      { title: "계정 찾기", path: "/" },
    ],
  };

  const subTitle: titleType = {
    "/account/login": ` Welcome to Cup Game!! 이상형 월드컵을 만들고 공유하려면 로그인이
    필요합니다.이메일 주소만으로 간단히 계정 생성이 가능합니다.`,
    "/account/register": `Welcome to Cup Game!! 이상형 월드컵을 만들고 공유하려면 로그인이
    필요합니다.이메일 주소만으로 간단히 계정 생성이 가능합니다.`,
  };
  return (
    <div className={`${styles.container} center_wrapper`}>
      <img
        className={styles.logo}
        src="/images/cup_logo.svg"
        alt="login logo"
      />
      <h2 className={styles.title}>{title[pathname]}</h2>
      <h3 className={styles.sub_title}>{subTitle[pathname]}</h3>
      {children}
      <div className={styles.finds}>
        {links[pathname].map(
          (link: { title: string; path: string }, index: number) => {
            return <button key={`${title}_${index}`}>{link.title}</button>;
          }
        )}
      </div>
    </div>
  );
};

export default AccountLayout;
