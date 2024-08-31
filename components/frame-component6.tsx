import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import ProjectTypes from "./project-types";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-scroll-to="frameContainer"
    >
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <FrameComponent1 propColor="#fff" propColor1="#fff" />
      <div className={styles.projectExamples}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.webDesignsParent}>
              <img
                className={styles.webDesignsIcon}
                loading="lazy"
                alt=""
                src="/web-designs@2x.png"
              />
              <img
                className={styles.webDesignsIcon1}
                alt=""
                src="/web-designs-1@2x.png"
              />
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.webDesignName}>
            <div className={styles.webDesign}>{`Web Design `}</div>
            <b
              className={styles.aircallingLandingPage}
            >{`AirCalling Landing Page Design `}</b>
          </div>
        </div>
        <ProjectTypes
          webDesigns="/web-designs-2@2x.png"
          webDesigns1="/web-designs-3@2x.png"
          businessLandingPageDesign="Business Landing Page Design "
          propColor="#fff"
        />
        <ProjectTypes
          webDesigns="/web-designs-4@2x.png"
          webDesigns1="/web-designs-5@2x.png"
          businessLandingPageDesign="Ecom Web Page Design "
          propColor="#fff"
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
