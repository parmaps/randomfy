import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const Slogan = (props: Props) => {
  return <p className={inter.className}>Let&apos;s dig some new music!</p>;
};

export default Slogan;
