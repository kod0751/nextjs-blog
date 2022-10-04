import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getServerSideProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{time}</h1>
        <h1>
          <Link href="/csr">
            <a>CSR 로</a>
          </Link>
        </h1>
        <h1>
          <Link href="/ssg">
            <a>SSG 로</a>
          </Link>
        </h1>
        <h1>
          <Link href="/isr">
            <a>ISR 로</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
