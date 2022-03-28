import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>trizuliak.com</title>
        <meta name="description" content="Peter Trizuliak's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello! 👋</h1>
        <p className={styles.description}>
          I am Peter. Software engineer. Indie maker. Dad. In reverse order of
          importance.
        </p>
        <p className={styles.description}>
          I am to be found{" "}
          <a
            href="https://twitter.com/trizo_za"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/peter-trizuliak"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/trizoza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ,{" "}
          <a
            href="https://www.producthunt.com/@parking_pete"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ,{" "}
          <a
            href="https://github.com/trizoza"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ,{" "}
          <a
            href="https://trizoza.bio.link/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          and{" "}
          <a
            href="https://www.instagram.com/something.about.trees/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className={styles.description}>
          I am building Hacker News for automotive industry -{" "}
          <a
            href="https://autonews.io/?ref=trizuliak.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            autonews.io
          </a>
          , distraction free pomodoro timer -{" "}
          <a
            href="https://juicytimer.com/?ref=trizuliak.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            juicytimer.com
          </a>{" "}
          and few more little projects that are still about to be published.
        </p>
      </main>
    </div>
  );
};

export default Home;
