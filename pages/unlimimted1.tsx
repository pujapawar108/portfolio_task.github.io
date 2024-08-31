import type { NextPage } from "next";
import styles from "./unlimimted1.module.css";

const Unlimimted1: NextPage = () => {
  return (
    <div className={styles.unlimimted}>
      <div className={styles.imacProFrontViewMockup}>
        <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
        <div className={styles.mainParent}>
          <img className={styles.mainIcon} alt="" src="/main@2x.png" />
          <img
            className={styles.imacProFrontViewMockupLab}
            loading="lazy"
            alt=""
            src="/imac-pro-front-view-mockup-label@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Unlimimted1;
