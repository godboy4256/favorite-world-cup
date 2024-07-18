"use client";

import { useEffect, useState } from "react";
import { getFireStoreAllData } from "../../lib/firebase/firestore";
import { compListKeyID } from "../../utils/idGenerator";
import WclistCard from "@/components/list/item/wclist/wclist";
import WcContainer from "@/components/list/container/wccontainer/wccontainer";

type WcType = {
  name: string;
  description: string;
  thumnail: string;
  playCount: number;
  createdAt: string;
  writer: string;
};

export default function Home() {
  const [wcList, setWcList] = useState([]);

  let wcList2 = [
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
    {
      name: "축구",
      writer: "석지웅",
      description: "좋아하는 축구팀은?",
      thumnail: "",
      playCount: 0,
      createdAt: "2024-07-18",
    },
  ];

  useEffect(() => {
    getFireStoreAllData("wc_list", (answer) => setWcList(answer));
  }, []);

  return (
    <main className="center_wrapper">
      <WcContainer>
        {wcList.map((wc: WcType, index: number) => {
          return (
            <WclistCard
              key={compListKeyID(String(wc), index)}
              name={wc.name}
              description={wc.description}
              thumnail={wc.thumnail}
              playCount={wc.playCount}
              createdAt={wc.createdAt}
              writer={wc.writer}
            />
          );
        })}
      </WcContainer>
    </main>
  );
}
