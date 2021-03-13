import Head from "next/head";
import styles from "./Page.module.scss";

export default function Page(props) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Brief aan de Premier</title>
        <link rel="icon" href="/img/favicon.svg" />
      </Head>

      <main className={`${styles.body}`}>
        {props.children}
      </main>
    </>
  );
}
