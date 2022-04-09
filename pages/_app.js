import "../styles/globals.css";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main className={styles.mainPadding}>
      <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
