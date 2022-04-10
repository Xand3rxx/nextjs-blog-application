import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostsList from "../components/posts/PostsList";
import POSTS from "../data/index";

// For static rendering with build up
// export const getStaticProps = async () => {
//   return {
//     props: {
//       posts: POSTS.posts,
//     },
//     revalidate: 3600,
//   };
// };

// For server side rendering
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       posts: POSTS.posts,
//     },
//   };
// };

export default function Home(props) {
  const [loadedPosts, setLoadedPosts] = useState([]);
  useEffect(() => {
    // Send a request and fetch the post data
    setLoadedPosts(POSTS.posts);
  }, []);

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
      <PostsList data={loadedPosts} />
    </div>
  );
}
