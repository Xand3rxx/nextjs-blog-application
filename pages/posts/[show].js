import PostDetail from "../../components/posts/PostDetail";
import Head from "next/head";
const { MONGODB_CONNECTION } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
import POST from "../../data/index";

const ShowPost = (props) => {
  return (
    <>
      <Head>
        <title>
          {props.post.title} | {props.appName}
        </title>
        <meta name="description" content={props.post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostDetail
        title={props.post.title}
        author={props.post.author}
        // timestamp={new Date(props.post.timestamp).toLocaleDateString()}
        timestamp={props.post.timestamp}
        description={props.post.description}
      />
    </>
  );
};

export default ShowPost;

// Get exact page data to pregenerate
export const getStaticPaths = async () => {
  const { db } = await MONGODB_CONNECTION();

  // Get the results from the api
  const results = await db
    .collection(process.env.COLLECTION_NAME)
    .find({}, { _id: 1 })
    .toArray();

  return {
    fallback: "blocking", // Every id is accounted for
    paths:
      results == ""
        ? results.map((post) => ({
            params: { show: post._id.toString() },
          }))
        : POST.posts.map((post) => ({
            params: { show: post.id },
          })),
  };
};

// For static data with id
export const getStaticProps = async (context) => {
  const { db } = await MONGODB_CONNECTION();

  // Get the result of the parameters
  const post = await db
    .collection(process.env.COLLECTION_NAME)
    .findOne({ _id: ObjectId(context.params.show) });

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
