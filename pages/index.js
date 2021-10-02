import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DYS UPUP</title>
        <meta name="description" content="色友信息聚合" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header} />
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.middle}></div>
        <div className={styles.right}></div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
