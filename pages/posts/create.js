import PostCreate from "../../components/posts/PostCreate";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
const CreatePost = () => {
  const router = useRouter();

  const addCreatePostHandler = async (data) => {
    try {
      const payload = await fetch("/api/create-post/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const response = await payload.json();
      console.log(response);
      document.getElementById("create-post-form").reset();
      // router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PostCreate
      className={`${styles.container}`}
      onPostCreate={addCreatePostHandler}
    />
  );
};

export default CreatePost;
