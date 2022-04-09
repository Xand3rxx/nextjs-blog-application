import styles from "../styles/Home.module.css";
import Link from "next/link";
import routes from "../data/routes";

const Layout = (props) => {
  return (
    <>
      <nav
        className={`${styles.navbar} ${styles.navbarLight} ${styles.bgLight} ${styles.fixedTop} ${styles.shadow} ${styles.floatRight}`}
      >
        <div className={`${styles.containerFluid}`}>
          <Link href={routes.home} passHref>
            <a className={`${styles.navbarBrand} ${styles.mx5}`}>
              {/* <Image src={logo} alt="" width={20} height={20} /> */}
              NextJS: Xand3rx Blog
            </a>
          </Link>

          <div className={`${styles.floatRight} ${styles.justifyContentEnd}`}>
            <Link href={routes.home} passHref>
              <button
                className={`${styles.btn} ${styles.btnSm} ${styles.btnOutlineSecondary}`}
                type="button"
              >
                Home
              </button>
            </Link>

            <Link href={routes.createPost} passHref>
              <button
                className={`${styles.btn} ${styles.btnSm} ${styles.btnOutlineSuccess} ${styles.ms2}`}
                type="button"
              >
                + New Post
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className={styles.footer}>
        <a
          href="https://github.com/Xand3rxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Anthony Joboy
        </a>
      </footer>
    </>
  );
};

export default Layout;
