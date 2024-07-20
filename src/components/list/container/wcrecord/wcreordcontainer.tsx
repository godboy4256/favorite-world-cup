import React from "react";
import styles from "./wcreordcontainer.module.css";

const WcReordContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>후보 목록</h2>
        <div className={styles.header}>
          <div className={styles.rank}>순위</div>
          <div className={styles.img}>사진</div>
          <div className={styles.name}>이름</div>
          <div className={styles.selectcount}>승리</div>
          <div className={styles.wincount}>우승</div>
        </div>
        <ul>{children}</ul>
      </div>
    </>
  );
};

export default WcReordContainer;
