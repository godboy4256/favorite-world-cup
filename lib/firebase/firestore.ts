import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Dispatch, SetStateAction } from "react";

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

const createFireStore = async () => {
  await setDoc(doc(db, "wc_list"), {});
};

export { getFireStoreAllData, createFireStore };
