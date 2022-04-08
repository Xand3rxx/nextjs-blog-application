import PostItem from "./PostItem";
import styles from "../../styles/Home.module.css";

const PostsList = (props) => {
  return (
    <div className={styles.grid}>
      {props.posts.posts.length > 0
        ? props.posts.posts.map((post) => (
            <PostItem
              id={post.id}
              key={post.id}
              title={post.title}
              author={post.author}
              comment={post.comment}
            />
          ))
        : "No posts found!"}
    </div>
  );
};

export default PostsList;
