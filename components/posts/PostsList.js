import PostItem from "./PostItem";
import styles from "../../styles/Home.module.css";

const PostsList = (props) => {
  return (
    <div className={styles.grid}>
      {props.data.length > 0
        ? props.data.map((post) => (
            <PostItem
              id={post.id}
              key={post.id}
              title={post.title}
              author={post.author}
              excerpt={post.excerpt}
            />
          ))
        : "No posts found!"}
    </div>
  );

  // return (
  //   <div className={styles.grid}>
  //     {props.data.map((post) => (
  //       <PostItem
  //         id={post.id}
  //         key={post.id}
  //         title={post.title}
  //         author={post.author}
  //         excerpt={post.excerpt}
  //       />
  //     ))}
  //   </div>
  // );
};

export default PostsList;
