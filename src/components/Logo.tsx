import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      className={styles.logo}
      src="/randomfy-logo.png"
      alt="Randomfy Logo"
      width={60}
      height={60}
      priority
    />
  );
};

export default Logo;
