import React from "react";
import { Inter } from "next/font/google";
import styles from "../../styles/Home.module.scss";
import Slogan from "./Slogan";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Brand = (props: Props) => {
  return (
    <div className={styles.card}>
      <a
        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={inter.className}>Randomfy</h2>
      </a>
      <Slogan></Slogan>
    </div>
  );
};

export default Brand;
