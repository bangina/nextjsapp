import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header</header>
      <main className={styles.main}>
        <h1>main</h1>
        <Link href="/">Next.js!</Link>
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
