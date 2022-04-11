import { useRouter } from "next/router";
import PostDetail from "../../components/posts/PostDetail";

const ShowPost = () => {
  const router = useRouter();

  // return <h1>{router.query.show}</h1>;
  return (
    <PostDetail
      title="The White Expressions"
      author="Sarah Nnamdi"
      timestamp="2022-03-23"
      description="If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play."
    />
  );
};

export default ShowPost;

// Get exact page data to pregenerate
export const getStaticPaths = async () => {
  return {
    fallback: false, // Every id is accounted for
    paths: [
      {
        params: {
          id: "376d6479-264f-48ce-a61c-d40b3c013f6a",
        },
      },
      {
        params: {
          id: "bc5bf4e4-d1f8-4d70-8dbc-53bd873d10d2",
        },
      },
      {
        params: {
          id: "24bbda9e-f2c5-47f2-b7e5-875ede989beb",
        },
      },
      {
        params: {
          id: "02cbe749-9d6d-4a9b-9d5d-94a21aaf88d4",
        },
      },
      {
        params: {
          id: "3fc6d41a-5837-4331-87fb-380c68e1a7e2",
        },
      },
      {
        params: {
          id: "4c0bfbd8-4f5e-4027-882d-c249acb59d00",
        },
      },
      {
        params: {
          id: "afa3d081-f60d-4642-80e0-46b2dfdb2d1f",
        },
      },
      {
        params: {
          id: "3989fdfb-9546-4a92-a408-dc3898df6281",
        },
      },
    ],
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
