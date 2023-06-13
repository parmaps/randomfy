import Head from "next/head";
import { Inter } from "@next/font/google";
import Slogan from "@/components/Slogan";
import styles from "../styles/Home.module.scss";
import Logo from "@/components/Logo";
import Brand from "@/components/Brand";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Randomfy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.center}>
            <Logo />
          </div>
          <div className={styles.center}>
            <Brand />
          </div>
          {/* <div className={styles.center}>
            <Slogan></Slogan>
          </div> */}
        </div>
      </main>
    </>
  );
}
