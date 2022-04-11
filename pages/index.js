// import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostsList from "../components/posts/PostsList";
// import POSTS from "../data/index";

// For static rendering with build up
export const getServerSideProps = async () => {
  // Get all posts from api
  const payload = await fetch(process.env.DEVELOPMENT_URL, {
    method: "GET",
  });

  // Get the results from the api
  let results = await payload.json();

  return {
    props: {
      posts: results.message.map((post) => ({
        id: post._id.toString(),
        title: post.title,
        author: post.author,
        excerpt: post.excerpt,
      })),
    },
    //   //Uncomment for offline usage
    // props: {
    //   posts: POSTS.posts,
    // },
    // revalidate: 1000, // Number in seconds to refectch static deata
  };
};

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
  //Uncomment for offline usage
  // const [loadedPosts, setLoadedPosts] = useState([]);
  // useEffect(() => {
  //   // Send a request and fetch the post data
  //   setLoadedPosts(POSTS.posts);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | NextJS Demo Application</title>
        <meta
          name="description"
          content="A demo application built with NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`${styles.title} ${styles.my5}`}>NextJS: Xand3rx Blog</h1>
      <PostsList data={props.posts} />
    </div>
  );
}
