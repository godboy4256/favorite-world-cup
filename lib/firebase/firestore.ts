import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const getFireStoreAllData = async (
  path: string,
  callBack: (answer: []) => void
) => {
  let answer: any = [];
  const query = await getDocs(collection(db, path));
  query.forEach((doc) => {
    answer.push({ ...doc.data(), id: doc.id });
  });
  callBack(answer);
};

const getFireStoreDoc = async (
  path: string,
  id: string,
  callBack: (answer: any) => void
) => {
  const getdoc = await getDoc(doc(db, path, id));
  if (getdoc.data()) callBack(getdoc.data());
};

const createFireStore = async () => {
  await setDoc(doc(db, "wc_candidate", "tvXpAjMDHGlrIzWw2323"), {
    candidate: [
      { name: "피르미누", imgUrl: "" },
      { name: "메시", imgUrl: "" },
      { name: "드록바", imgUrl: "" },
      { name: "페르난도 토레스", imgUrl: "" },
      { name: "호날두", imgUrl: "" },
      { name: "호나우두", imgUrl: "" },
      { name: "호나우지뉴", imgUrl: "" },
      { name: "칸나바로", imgUrl: "" },
    ],
  });
};

export { getFireStoreAllData, getFireStoreDoc, createFireStore };
