import { useRef } from "react";

// import Card from '../ui/Card';
// import styles from './PostCreate.module.css';
import styles from "../../styles/Home.module.css";

function PostCreate(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const excerptInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredExcerpt = excerptInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const data = {
      title: enteredTitle,
      author: enteredAuthor,
      excerpt: enteredExcerpt,
      description: enteredDescription,
    };

    props.onPostCreate(data);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.row}>
        <div className={`${styles.formGroup} ${styles.col}`}>
          <label htmlFor="title">Title</label>
          <input
            className={styles.formControl}
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.col}`}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            maxLength={20}
            required
            id="author"
            ref={authorInputRef}
            className={styles.formControl}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.formGroup} ${styles.col} ${styles.mt3}`}>
          <label htmlFor="excerpt">Brief Description</label>
          <textarea
            id="excerpt"
            required
            rows="3"
            ref={excerptInputRef}
            className={styles.formControl}

          ></textarea>
        </div>
        <div className={`${styles.formGroup} ${styles.col} ${styles.mt3}`}>
          <label htmlFor="description">Full Description</label>
          <textarea
            id="description"
            required
            rows="3"
            ref={descriptionInputRef}
            className={styles.formControl}

          ></textarea>
        </div>
      </div>
      <button className={`${styles.btn} ${styles.btnOutlineSuccess}`}>
        Create
      </button>
      {/* </div> */}
    </form>
  );
}

export default PostCreate;
