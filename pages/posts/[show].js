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
