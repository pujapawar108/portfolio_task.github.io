import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <header className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.heroContentParent}>
        <div className={styles.heroContent}>
          <img
            className={styles.subtractIcon}
            loading="lazy"
            alt=""
            src="/subtract.svg"
          />
          <div className={styles.pageLinks}>
            <a className={styles.mumair}>
              <b>M</b>
              <span className={styles.umair}>{`umair `}</span>
            </a>
          </div>
        </div>
        <nav className={styles.frameWrapper}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.aboutMe}>About Me</a>
            <a className={styles.services}>Services</a>
            <a className={styles.projects}>Projects</a>
          </nav>
        </nav>
        <div className={styles.bottomLinksWrapper}>
          <div className={styles.bottomLinks}>
            <div className={styles.contactWrapper}>
              <a className={styles.testimonials}>Testimonials</a>
            </div>
            <div className={styles.contactWrapper}>
              <a className={styles.contact}>Contact</a>
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <a className={styles.downlaodCv}>Downlaod CV</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
