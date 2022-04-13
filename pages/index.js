// import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostsList from "../components/posts/PostsList";
// import POSTS from "../data/index";

// For static rendering with build up
export const getServerSideProps = async () => {
  //   const req = context.req;
  //   const res = context.res;

  // Get all posts from api
  const payload = await fetch(process.env.DEVELOPMENT_URL, {
    method: "GET",
  });

  // Get the results from the api
  const results = await payload.json();
  // console.error("SERVER_RESPONSE => ", results);

  return {
    props: {
      posts: results.message.map((post) => ({
        id: post._id.toString(),
        title: post.title,
        author: post.author,
        excerpt: post.excerpt,
      })),
      appName: process.env.APP_NAME,
    },
    //   //Uncomment for offline usage
    // props: {
    //   posts: POSTS.posts,
    //   appName: process.env.APP_NAME,
    // },
  };
};

// For static site rendering
// export const getStaticProps = async () => {
//   return {
//     props: {
//       posts: POSTS.posts,
// appName: process.env.APP_NAME,

//     },
//     revalidate: 1000, // Number in seconds to refectch static deata
//   };
// };

export default function Home(props) {
  //Uncomment for offline usage
  // const [loadedPosts, setLoadedPosts] = useState([]);
  // useEffect(() => {
  //   // Send a request and fetch the post data
  //   setLoadedPosts(POSTS.posts);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | {props.appName}</title>
        <meta
          name="description"
          content="A demo application built with NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`${styles.title} ${styles.my5}`}>{props.appName}</h1>
      <PostsList data={props.posts} />
    </div>
  );
}
