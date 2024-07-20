"use client";

import { useEffect, useState } from "react";
import { getFireStoreAllData } from "../../lib/firebase/firestore";
import { compListKeyID } from "../../utils/idGenerator";
import WclistCard from "@/components/list/item/wclist/wclistitem";
import WcContainer from "@/components/list/container/wclist/wclistcontainer";

type WcType = {
  name: string;
  id: string;
  description: string;
  thumnail: string;
  playCount: number;
  createdAt: string;
  writer: string;
};

export default function Home() {
  const [wcList, setWcList] = useState([]);

  useEffect(() => {
    getFireStoreAllData("wc_list", (answer) => setWcList(answer));
  }, []);

  return (
    <main className="center_wrapper">
      <WcContainer>
        {wcList?.map((wc: WcType, index: number) => {
          return (
            <WclistCard
              key={compListKeyID(String(wc), index)}
              id={wc.id}
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
