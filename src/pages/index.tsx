import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.scss";
import styles from "../styles/Home.module.scss"


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
            <Image
              className={styles.logo}
              src="/randomfy-logo.png"
              alt="Randomfy Logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <div className={styles.center}>
            <a
              // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer">
              <h2 className={inter.className}>Randomfy</h2>
              {/* <p className={inter.className}>
              Find information about Randomfy features.
            </p> */}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
