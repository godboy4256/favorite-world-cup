import React from "react";
import styles from "./wclist.module.css";

type wcListType = {
  name: string;
  description: string;
  thumnail: string;
  key: string;
  writer: string;
  playCount: number;
  createdAt: string;
};

const WclistCard = ({
  name,
  description,
  thumnail,
  writer,
  key,
  playCount,
  createdAt,
}: wcListType) => {
  return (
    <li key={key} className={styles.container}>
      {thumnail ? (
        <img src={thumnail} alt="wc_list thumnail" />
      ) : (
        <div className={styles.none_thumnail}>
          <img src="/images/cup_logo.svg" alt="thumnail logo" />
        </div>
      )}
      <div className={styles.info_wrapper}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.description}>{description}</h4>
        <div className={styles.writer}>제작 : {writer} 님</div>
        <div className={styles.bottom_wrapper}>
          <div className={styles.play_count}>
            <span>{playCount}</span>회 진행
          </div>
          <div className={styles.createdAt}>{createdAt}</div>
        </div>
      </div>
    </li>
  );
};

export default WclistCard;
