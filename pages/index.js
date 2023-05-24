import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AvatarWrapper from "./components/AvatarWrapper";
import React, { useState,useEffect } from "react";

export default function Home() {
  const jiaran = async (id) => {
    const status = await fetch("/api/live/" + id);
    const data = await status.json();
    alert(data ? "已开播" : "未开播");
  };
  useEffect(()=> {
  window.location.href='http://124.221.2.237/';
  },[])
  const [a, b] = useState('');
  return (
    <div>
      <Head>
        <title>DYS UPUP</title>
        <meta name="description" content="色友信息聚合" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div style={{ float: "right", lineHeight: "50px", marginRight: 20 }}>
          {new Date().toLocaleString()}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <div>
            <AvatarWrapper name="嘉然" src="/avatar/jiaran.png" />
            <AvatarWrapper name="小月亮" src="/avatar/xiaoyueliang.png" />
            <AvatarWrapper name="阿梓" live="1" src="/avatar/azi.png" />
            <AvatarWrapper name="7海" src="/avatar/nanami.png" />
            <button onClick={() => jiaran("jiaran")}>查询嘉然是否开播</button>
            <button onClick={() => jiaran("xiaoyueliang")}>
              查询小月亮是否开播
            </button>
            <button onClick={() => jiaran("azi")}>查询阿梓是否开播</button>
            <button onClick={() => jiaran("nanami")}>
              查询7海娜娜米是否开播
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
