import PostCreate from "../../components/posts/PostCreate";
import styles from "../../styles/Home.module.css";

const CreatePost = () => {
  const addCreatePostHandler = (data) => {
    console.log(data);
  };

  return (
    <PostCreate
      className={`${styles.container}`}
      onPostCreate={addCreatePostHandler}
    />
  );
};

export default CreatePost;
