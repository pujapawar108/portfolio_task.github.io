import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.subtractParent, className].join(" ")}>
      <img
        className={styles.subtractIcon}
        loading="lazy"
        alt=""
        src="/subtract.svg"
      />
      <div className={styles.mumairWrapper}>
        <a className={styles.mumair}>
          <b>M</b>
          <span>{`umair `}</span>
        </a>
      </div>
    </div>
  );
};

export default FrameComponent5;
