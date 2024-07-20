import React from "react";
import styles from "./wcrecorditem.module.css";

type ItemType = {
  name: string;
  imgUrl: string;
  selectCount: number;
  winCount: number;
  rank: number;
};

const WcRecordItem = ({
  name,
  imgUrl,
  selectCount,
  winCount,
  rank,
}: ItemType) => {
  return (
    <li className={styles.container}>
      <h3 className={styles.rank}>{rank} 위</h3>
      <div className={styles.img}>
        {imgUrl && <img src={imgUrl} alt="wc record img" />}
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.selectcount}>{selectCount}</div>
      <div className={styles.wincount}>{winCount}</div>
    </li>
  );
};

export default WcRecordItem;
