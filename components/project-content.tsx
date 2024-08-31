import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./project-content.module.css";

export type ProjectContentType = {
  className?: string;

  /** Style props */
  loremIpsumDolorAlignSelf?: CSSProperties["alignSelf"];
  loremIpsumDolorPadding?: CSSProperties["padding"];
  loremIpsumDolorFlex?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const ProjectContent: NextPage<ProjectContentType> = ({
  className = "",
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPadding,
  loremIpsumDolorFlex,
  propColor,
  propColor1,
}) => {
  const projectContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: loremIpsumDolorAlignSelf,
      padding: loremIpsumDolorPadding,
      flex: loremIpsumDolorFlex,
    };
  }, [loremIpsumDolorAlignSelf, loremIpsumDolorPadding, loremIpsumDolorFlex]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={[styles.projectContent, className].join(" ")}
      style={projectContentStyle}
    >
      <div className={styles.projectTitle}>
        <div className={styles.servicesHeading}>
          <div className={styles.servicesWrapper}>
            <h1 className={styles.services} style={servicesStyle}>
              Services
            </h1>
          </div>
          <div className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
      </div>
      <div className={styles.serviceList}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.serviceCards}>
            <div className={styles.cardIcons}>
              <img
                className={styles.designIconsSet}
                alt=""
                src="/service-icon-image.svg"
              />
              <img
                className={styles.developmentIconsSet}
                alt=""
                src="/vector-12.svg"
              />
              <img
                className={styles.marketingIconsSet}
                alt=""
                src="/vector-21.svg"
              />
              <img className={styles.sEOIconsSet} alt="" src="/vector-31.svg" />
              <img
                className={styles.contentIconsSet}
                alt=""
                src="/vector-41.svg"
              />
              <img className={styles.supportIcon} alt="" src="/vector-51.svg" />
              <img
                className={styles.analyticsIcon}
                alt=""
                src="/vector-61.svg"
              />
              <img
                className={styles.moreServicesIcon}
                alt=""
                src="/vector-71.svg"
              />
            </div>
          </div>
          <div className={styles.serviceInfo}>
            <h3 className={styles.uiux}>UI/UX</h3>
            <div className={styles.cardDescriptions}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardComponents}>
          <div className={styles.frameChild} />
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1.svg"
          />
          <h3 className={styles.webDesign}>{`Web Design `}</h3>
          <div className={styles.loremIpsumDolorSitAmetConWrapper}>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </div>
          </div>
        </div>
        <div className={styles.cardComponents1}>
          <div className={styles.frameChild} />
          <div className={styles.cardComponentsInner}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-18.svg"
            />
          </div>
          <div className={styles.serviceInfo}>
            <h3 className={styles.webDesign}>App Design</h3>
            <div className={styles.loremIpsumDolorSitAmetConWrapper}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardComponents2}>
          <div className={styles.frameChild} />
          <div className={styles.frameDiv}>
            <div className={styles.cardIcons}>
              <img
                className={styles.designIconsSet}
                alt=""
                src="/vector-81.svg"
              />
              <img className={styles.vectorIcon1} alt="" src="/vector-91.svg" />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector-101.svg"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector-111.svg"
              />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="/vector-121.svg"
              />
            </div>
          </div>
          <div className={styles.serviceInfo}>
            <h3 className={styles.webDesign}>{`Graphic Design `}</h3>
            <div className={styles.loremIpsumDolorSitAmetConWrapper}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
