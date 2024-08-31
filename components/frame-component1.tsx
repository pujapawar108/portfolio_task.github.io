import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  propColor,
  propColor1,
}) => {
  const myProjectsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolor1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={[styles.testimonialWrapper, className].join(" ")}>
      <div className={styles.testimonial}>
        <div className={styles.projectsHeader}>
          <div className={styles.projectsTitle}>
            <div className={styles.myProjectsWrapper}>
              <h1 className={styles.myProjects} style={myProjectsStyle}>
                My Projects
              </h1>
            </div>
            <div
              className={styles.loremIpsumDolor}
              style={loremIpsumDolor1Style}
            >
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.viewAllButton}>
            <div className={styles.allWrapper}>
              <div className={styles.all}>All</div>
            </div>
          </div>
          <div className={styles.uiuxWrapper}>
            <div className={styles.uiux}>UI/UX</div>
          </div>
          <button className={styles.categoryPairOne}>
            <div className={styles.webDesign}>Web Design</div>
          </button>
          <button className={styles.developmentCategories}>
            <div className={styles.appDesign}>App Design</div>
          </button>
          <button className={styles.developmentCategories}>
            <div className={styles.appDesign}>Graphic Design</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
