import { useRouter } from "next/router";

const ShowPost = () => {
  const router = useRouter();

  return <h1>{router.query.show}</h1>;
//   return <div>[show]</div>;
};

export default ShowPost;
