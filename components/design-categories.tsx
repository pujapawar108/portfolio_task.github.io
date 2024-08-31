import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./design-categories.module.css";

export type DesignCategoriesType = {
  className?: string;
  websiteDesign?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const DesignCategories: NextPage<DesignCategoriesType> = ({
  className = "",
  websiteDesign,
  propColor,
  propWidth,
  propRight,
}) => {
  const websiteDesignStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const skillProgressBarStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const skillProgressAdditionalPoinStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={[styles.designCategories, className].join(" ")}>
      <div className={styles.websiteDesign} style={websiteDesignStyle}>
        {websiteDesign}
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.skillProgressBar}
          style={skillProgressBarStyle}
        />
        <div
          className={styles.skillProgressAdditionalPoin}
          style={skillProgressAdditionalPoinStyle}
        />
      </div>
    </div>
  );
};

export default DesignCategories;
