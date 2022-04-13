import { Fragment } from "react";
import styles from "../../styles/PostDetail.module.css";
import Image from "next/image";
import DefaultPostImage from "../../public/img/landing.jpg";
import DefaultAvatar from "../../public/img/blank.png";
import { useEffect, useState } from "react";

const PostDetail = (props) => {
  // Generate random images for avatar placeholder
  const random = Math.floor(Math.random() * 54) + 1;
  const postImage = `https://picsum.photos/id/${random}/1024/1024`;
  const avatarURL = `https://i.pravatar.cc/150?img=${random}`;

  const [imageFallback, setImageFallback] = useState();
  const [imageFallback2, setPostImageFallback] = useState();

  useEffect(() => {
    setImageFallback(avatarURL);
    setPostImageFallback(postImage);
  }, [avatarURL, postImage]);

  return (
    <div className={`${styles.px8} ${styles.mt10}`}>
      <Fragment>
        <div
          className={`${styles.mxAuto} ${styles.screenWidth45} ${styles.screenFlex} ${styles.screenFlexRow} ${styles.screenHeight}`}
        >
          <Image
            className={`${styles.roundedTop} ${styles.h48} ${styles.wFull} ${styles.screenHeight} ${styles.screenWidth25} ${styles.roundedTopBottom}`}
            src={postImage}
            alt={props.title}
            onError={() => {
              setImageFallback(DefaultPostImage);
            }}
            width={1000}
            height={300}
          />
          <div
            className={`${styles.bgWhite} ${styles.p8} ${styles.roundedBottom} ${styles.roundedBottomTop}`}
          >
            <h2 className={`${styles.textGray700} ${styles.fontSemiBold}`}>
              {props.title}
            </h2>
            <p
              className={`${styles.textSm} ${styles.textGray600} ${styles.mt4}`}
            >
              {props.description}
            </p>
            <div
              className={`${styles.flex} ${styles.itemsCenter} ${styles.mt8}`}
            >
              <div className={`${styles.flex} ${styles.itemsCenter}`}>
                <Image
                  className={`${styles.h10} ${styles.w10} ${styles.roundedFull}`}
                  src={avatarURL}
                  onError={() => {
                    setImageFallback(DefaultAvatar);
                  }}
                  alt={props.author}
                  width={50}
                  height={50}
                />
                <div className={styles.ml4}>
                  <p
                    className={`${styles.fontSemiBold} ${styles.textSm} ${styles.textGray800}`}
                  >
                    {props.author}
                  </p>
                  <p className={`${styles.textSm} ${styles.textGray600}`}>
                    {currentDateAndTime(props.timestamp)}
                  </p>
                </div>
              </div>
              <div
                className={`${styles.h8} ${styles.w8} ${styles.mlAuto} ${styles.bgGray200} ${styles.roundedFull} ${styles.screenFlex} ${styles.itemsCenter} ${styles.justifyCenter}`}
              >
                <a
                  href="https://github.com/Xand3rxx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      fill="#6E8098"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
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
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return yyyy + "-" + mm + "-" + dd + " " + time;
};

export default PostDetail;
