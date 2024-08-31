import type { NextPage } from "next";
import DesignCategories from "./design-categories";
import styles from "./about-info.module.css";

export type AboutInfoType = {
  className?: string;
  websiteDesign?: string;
  websiteDesign1?: string;
  propColor?: string;
  propColor1?: string;
  propWidth?: string;
  propWidth1?: string;
  propRight?: string;
  propRight1?: string;
};

const AboutInfo: NextPage<AboutInfoType> = ({
  className = "",
  websiteDesign,
  websiteDesign1,
  propColor,
  propColor1,
  propWidth,
  propWidth1,
  propRight,
  propRight1,
}) => {
  return (
    <div className={[styles.aboutInfo, className].join(" ")}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutMe}>{`About Me `}</h1>
        <div className={styles.aboutDetails}>
          <div className={styles.appShape}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </div>
          </div>
          <div className={styles.aboutServices}>
            <div className={styles.ux}>UX</div>
            <div className={styles.serviceDescriptionContainerWrapper}>
              <div className={styles.serviceDescriptionContainer}>
                <div className={styles.serviceDescriptionBackground} />
                <div className={styles.serviceDescriptionBorder} />
                <div className={styles.serviceDescriptionIcon} />
              </div>
            </div>
          </div>
          <DesignCategories
            websiteDesign={websiteDesign}
            propColor={propColor}
            propWidth={propWidth}
            propRight={propRight}
          />
          <DesignCategories
            websiteDesign={websiteDesign1}
            propColor={propColor1}
            propWidth={propWidth1}
            propRight={propRight1}
          />
          <div className={styles.aboutServices1}>
            <div className={styles.graphicDesign}>{`Graphic Design `}</div>
            <div className={styles.serviceDescriptionContainerWrapper}>
              <div className={styles.serviceDescriptionContainer}>
                <div className={styles.serviceDescriptionBackground} />
                <div className={styles.serviceDescriptionBorder} />
                <div className={styles.serviceDescriptionIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
