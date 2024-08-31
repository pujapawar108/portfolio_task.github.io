import type { NextPage } from "next";
import ProjectContent from "./project-content";
import FrameComponent1 from "./frame-component1";
import ProjectTypes from "./project-types";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  loremIpsumDolorAlignSelf?: string;
  loremIpsumDolorPadding?: string;
  loremIpsumDolorFlex?: string;
  propColor?: string;
  propColor1?: string;
  propColor2?: string;
  propColor11?: string;
  webDesigns?: string;
  webDesigns1?: string;
  webDesigns11?: string;
  webDesigns12?: string;
  businessLandingPageDesign?: string;
  businessLandingPageDesign1?: string;
  propColor3?: string;
  propColor4?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPadding,
  loremIpsumDolorFlex,
  propColor,
  propColor1,
  propColor2,
  propColor11,
  webDesigns,
  webDesigns1,
  webDesigns11,
  webDesigns12,
  businessLandingPageDesign,
  businessLandingPageDesign1,
  propColor3,
  propColor4,
}) => {
  return (
    <section className={[styles.reviewWrapper, className].join(" ")}>
      <div className={styles.review}>
        <ProjectContent
          loremIpsumDolorAlignSelf={loremIpsumDolorAlignSelf}
          loremIpsumDolorPadding={loremIpsumDolorPadding}
          loremIpsumDolorFlex={loremIpsumDolorFlex}
          propColor={propColor}
          propColor1={propColor1}
        />
        <FrameComponent1 propColor={propColor2} propColor1={propColor11} />
        <div className={styles.projectsGrid}>
          <div className={styles.projectTypes}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.webDesignNames}>
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
            <div className={styles.webDesignSubtypes}>
              <div className={styles.webDesign}>{`Web Design `}</div>
              <b
                className={styles.aircallingLandingPage}
              >{`AirCalling Landing Page Design `}</b>
            </div>
          </div>
          <ProjectTypes
            webDesigns={webDesigns}
            webDesigns1={webDesigns11}
            businessLandingPageDesign={businessLandingPageDesign}
            propColor={propColor3}
          />
          <ProjectTypes
            webDesigns={webDesigns1}
            webDesigns1={webDesigns12}
            businessLandingPageDesign={businessLandingPageDesign1}
            propColor={propColor4}
          />
        </div>
        <div className={styles.servicesTitleWrapper}>
          <div className={styles.servicesTitle}>
            <div className={styles.testimonialsHeading}>
              <h1 className={styles.testimonials}>Testimonials</h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
