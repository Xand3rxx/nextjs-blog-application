import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostsList from "../components/posts/PostsList";
import posts from "../data/index";

export default function Home() {
  // const [loadedPosts, setLoadedPosts] = useState([]);

  // useEffect(() => {
  //   // Send a request and fetch the post data
  //   setLoadedPosts(posts);
  // }, []);

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

      <h1 className={`${styles.title} ${styles.my5}`}>NextJS: Xand3rx Blog</h1>
      <PostsList posts={posts} />
    </div>
  );
}
