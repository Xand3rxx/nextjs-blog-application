import { Fragment } from "react";
// import { useRouter } from "next/router";

const PostDetail = (props) => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.timestamp}</p>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default PostDetail;
