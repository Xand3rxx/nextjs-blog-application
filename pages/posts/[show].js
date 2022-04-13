// import { useRouter } from "next/router";
import PostDetail from "../../components/posts/PostDetail";
import Head from "next/head";
const { DB_CONNECTION } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

const ShowPost = (props) => {
  // const router = useRouter();

  // return <h1>{router.query.show}</h1>;
  //Uncomment for offline usage
  return (
    <>
      <Head>
        <title>{props.post.title} | {props.appName}</title>
        <meta name="description" content={props.post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostDetail
        title={props.post.title}
        author={props.post.author}
        timestamp={new Date(props.post.timestamp).toLocaleDateString()}
        description={props.post.description}
      />
    </>
  );
};

export default ShowPost;

// Get exact page data to pregenerate
export const getStaticPaths = async () => {
  const { db } = await DB_CONNECTION();

  // Get the results from the api
  const results = await db
    .collection(process.env.COLLECTION_NAME)
    .find({}, { _id: 1 })
    .toArray();

  return {
    fallback: "blocking", // Every id is accounted for
    paths: results.map((post) => ({
      id: post._id.toString(),
    })),
  };
};

// For static data with id
export const getStaticProps = async (context) => {
  const { db } = await DB_CONNECTION();

  // Get the result of the parameters
  const post = await db
    .collection(process.env.COLLECTION_NAME)
    .findOne({ _id: ObjectId(context.params.id) })
    .toArray();

  return {
    props: {
      post: {
        id: post._id.toString(),
        title: post.title,
        author: post.author,
        excerpt: post.excerpt,
        description: post.description,
      },
      appName: process.env.APP_NAME,
    },
  };
};
