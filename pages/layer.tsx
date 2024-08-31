import type { NextPage } from "next";
import styles from "./layer.module.css";

const Layer: NextPage = () => {
  return (
    <div className={styles.layer1}>
      <section className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className={styles.vectorIcon3}
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className={styles.vectorIcon4}
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className={styles.vectorIcon5}
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className={styles.vectorIcon6}
          loading="lazy"
          alt=""
          src="/vector-6.svg"
        />
        <img
          className={styles.vectorIcon7}
          loading="lazy"
          alt=""
          src="/vector-7.svg"
        />
        <img
          className={styles.vectorIcon8}
          loading="lazy"
          alt=""
          src="/vector-8.svg"
        />
        <img
          className={styles.vectorIcon9}
          loading="lazy"
          alt=""
          src="/vector-9.svg"
        />
        <img
          className={styles.vectorIcon10}
          loading="lazy"
          alt=""
          src="/vector-10.svg"
        />
        <img
          className={styles.vectorIcon11}
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
      </section>
    </div>
  );
};

export default Layer;
