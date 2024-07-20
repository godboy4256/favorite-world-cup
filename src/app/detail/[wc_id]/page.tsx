"use client";

import React, { useEffect, useState } from "react";
import { getFireStoreDoc } from "../../../../lib/firebase/firestore";
import { useParams } from "next/navigation";
import styles from "./detail.module.css";
import WcReordContainer from "@/components/list/container/wcrecord/wcreordcontainer";
import WcRecordItem from "@/components/list/item/wcrecord/wcrecorditem";

type wcListType = {
  name: string;
  id: string;
  thumnail: string;
  key: string;
  writer: string;
  playCount: number;
  createdAt: string;
};

const candidates = [
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
  {
    name: "피르미누",
    imgUrl: "",
    selectCount: 0,
    winCount: 0,
  },
];

const page = () => {
  const query = useParams();
  const [detail, setDetail] = useState<wcListType>();
  useEffect(() => {
    if (typeof query?.wc_id === "string")
      getFireStoreDoc("wc_list", query?.wc_id, (data) => {
        setDetail(data);
      });
  }, []);

  return (
    <div className={`center_wrapper ${styles.container}`}>
      <div className={styles.defaultinfo}>
        <div className={styles.thumnail}>
          {detail?.thumnail ? (
            <img src={detail?.thumnail} alt="thumnail images" />
          ) : (
            <div className={styles.none_thumnail}>{detail?.name}</div>
          )}
        </div>
        <div className={styles.textinfo}>
          <h2 className={styles.name}>{detail?.name}</h2>

          <div className={styles.makinginfo}>
            <div className={styles.writer}>제작자 : {detail?.writer}</div>
            <div className={styles.createdAt}>{detail?.createdAt}</div>
          </div>
          <div className={styles.playbutton}>
            <button>월드컵 시작</button>
            <div className={styles.playcount}>
              누적 <span>{detail?.playCount}</span> 회 플레이
            </div>
          </div>
        </div>
      </div>
      <WcReordContainer>
        {candidates?.map(
          (
            item: {
              name: string;
              imgUrl: string;
              selectCount: number;
              winCount: number;
            },
            idx: number
          ) => {
            return (
              <WcRecordItem
                name={item.name}
                imgUrl={item.imgUrl}
                selectCount={item.selectCount}
                winCount={item.winCount}
                rank={idx + 1}
              />
            );
          }
        )}
      </WcReordContainer>
    </div>
  );
};

export default page;
