import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <div className={styles.container}>
      <h1>
        <Link href="/">
          <a>Home 으로</a>
        </Link>
      </h1>
      {children}
    </div>
  );
}
