import React from "react";
import styles from "./wclistcontainer.module.css";

const WcListContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ul className={styles.container}>{children}</ul>;
};

export default WcListContainer;
