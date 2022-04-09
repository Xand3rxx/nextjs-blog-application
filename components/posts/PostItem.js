import styles from "../../styles/Home.module.css";
import DefaultImage from "../../public/img/blank.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const PostItem = ({ title, author, excerpt, id }) => {
  // Generate random images for avatar placeholder
  const random = Math.floor(Math.random() * 55) + 1;
  const avatarURL = `https://i.pravatar.cc/150?img=${random}`;

  // Check for image errror
  const onImageError = (e) => {
    return (e.target.src = DefaultImage);
  };

  const [imageFallback, setImageFallback] = useState();

  useEffect(() => {
    setImageFallback(avatarURL);
  }, [avatarURL]);

  return (
    <Link href={`/posts/${id}`} passHref key={id}>
      <a className={styles.card}>
        <h2>{title}</h2>
        <small>✍️ {" "}{author}</small>
        {/* <small className={styles.symbol}>
        <Image
          alt={author}
          src={avatarURL}
          onError={() => {
            setImageFallback(DefaultImage);
          }}
          width={50}
          height={50}
          blurDataURL="data:..."
          placeholder="blur"
        />
        {author}
      </small> */}
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};

export default PostItem;
