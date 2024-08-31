import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./project-types.module.css";

export type ProjectTypesType = {
  className?: string;
  webDesigns?: string;
  webDesigns1?: string;
  businessLandingPageDesign?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const ProjectTypes: NextPage<ProjectTypesType> = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
  propColor,
}) => {
  const businessLandingPageStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.projectTypes, className].join(" ")}>
      <div className={styles.inputField}>
        <div className={styles.inputFieldChild} />
        <div className={styles.webDesignsParent}>
          <img className={styles.webDesignsIcon} alt="" src={webDesigns} />
          <img className={styles.webDesignsIcon1} alt="" src={webDesigns1} />
        </div>
      </div>
      <div className={styles.webDesignParent}>
        <div className={styles.webDesign}>{`Web Design `}</div>
        <b
          className={styles.businessLandingPage}
          style={businessLandingPageStyle}
        >
          {businessLandingPageDesign}
        </b>
      </div>
    </div>
  );
};

export default ProjectTypes;
