import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const PostItem = ({ title, author, excerpt, id }) => {
  // const onImageError = (e) => {
  //   return (e.target.src = DefaultImage);
  // };

  return (
    <Link href={`/posts/${id}`} passHref key={id}>
      <a className={styles.card} title={title}>
        <h2>{title}</h2>
        <small>✍️ {author}</small>
        <small className={styles.symbol}>{author}</small>
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};

export default PostItem;
