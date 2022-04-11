import { useRouter } from "next/router";
import PostDetail from "../../components/posts/PostDetail";
import Head from "next/head";

const ShowPost = () => {
  const router = useRouter();

  // return <h1>{router.query.show}</h1>;
  //Uncomment for offline usage
  return (
    <>
    <Head>
        <title>Create | NextJS Demo Application</title>
        <meta
          name="description"
          content="Create blog post"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* new Date(post.createdAt).toLocaleDateString() */}
      <PostDetail
      title="The White Expressions"
      author="Sarah Nnamdi"
      timestamp="2022-03-23"
      description="If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play."
    />
    </>
  );
};

export default ShowPost;

// Get exact page data to pregenerate
export const getStaticPaths = async () => {
  return {
    fallback: 'blocking', // Every id is accounted for
    paths: results.map((post) => ({
      id: post._id.toString(),
    })),
  };
};

// For static data with id
export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      post: {
        title: id,
      },
    },
  };
};
