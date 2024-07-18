import React from "react";
import styles from "./wccontainer.module.css";

const WcContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ul className={styles.container}>{children}</ul>;
};

export default WcContainer;
