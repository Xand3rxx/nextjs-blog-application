import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
        <h1 className="title my-10">NextJS: Xand3rx Blog</h1>

        <div className={styles.grid}>
          <Link href="/posts/documentation" passHref>
            <a className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <Link href="/posts/learn" passHref>
            <a className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>

          <Link href="/posts/examples" passHref>
            <a className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>

          <Link href="/posts/deploy" passHref>
            <a className={styles.card}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
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


// const client = MongoClient.connect(
  //   "mongodb+srv://Xand3rx:digits232@cluster0.anhcv.mongodb.net/blogPosts?retryWrites=true&w=majority"
  // );
  // const db = (await client).db();

  // const blogCollection = await db.collection("posts");

  // const results = await blogCollection.find().toArray();
