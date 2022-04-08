import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostsList from "../components/posts/PostsList";
import posts from "../data/index";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Demo Application</title>
        <meta
          name="description"
          content="A demo application built with NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.my10}`}>NextJS: Xand3rx Blog</h1>
        <PostsList posts={posts} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Xand3rxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Anthony Joboy
        </a>
      </footer>
    </div>
  );
}
