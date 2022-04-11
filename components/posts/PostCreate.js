import { useRef } from "react";
import styles from "../../styles/Home.module.css";

function PostCreate(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const excerptInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      author: authorInputRef.current.value,
      excerpt: excerptInputRef.current.value,
      description: descriptionInputRef.current.value,
      timestamp: new Date(),
      title: titleInputRef.current.value,
    };

    if (Object.keys(data).length === 0) {
      alert("Blog post data is empty.");
      return false;
    }

    props.onPostCreate(data);
  };

  const currentDateAndTime = () => {
    let currentdate = new Date();
    currentdate.setHours(23);
    currentdate.setMinutes(8);
    currentdate.setSeconds(59);

    const dd = String(currentdate.getDate()).padStart(2, "0");
    const mm = String(currentdate.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = currentdate.getFullYear();
    const time =
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes()+
      ":" +
      currentdate.getSeconds();

    return yyyy + "-" + mm + "-" + dd + " " + time;
  };

  return (
    <form
      id="create-post-form"
      className={styles.form}
      onSubmit={submitHandler}
    >
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
    </form>
  );
}

export default PostCreate;
