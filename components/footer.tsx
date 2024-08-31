import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
  facebookNegative?: string;
  twitterNegative?: string;
  instagramNegative?: string;
  linkedInNegative?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propColor8?: CSSProperties["color"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
  facebookNegative,
  twitterNegative,
  instagramNegative,
  linkedInNegative,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const copyrightStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const mumairStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const mStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const umairStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const aboutMeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const services1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const projectsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const testimonialsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <section
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerChild} style={rectangleDivStyle} />
      <div className={styles.footerContent}>
        <div className={styles.footerDetails}>
          <div className={styles.footerElements}>
            <div className={styles.footerItemsWrapper}>
              <div className={styles.footerItems}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <div className={styles.footerBrand}>
                  <h1 className={styles.mumair} style={mumairStyle}>
                    <b style={mStyle}>M</b>
                    <span
                      className={styles.umair}
                      style={umairStyle}
                    >{`umair `}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.footerNavigation}>
              <div className={styles.home} style={homeStyle}>
                Home
              </div>
              <div className={styles.aboutMe} style={aboutMeStyle}>
                About Me
              </div>
              <div className={styles.services} style={services1Style}>
                Services
              </div>
              <div className={styles.projects} style={projectsStyle}>
                Projects
              </div>
              <div className={styles.testimonials} style={testimonialsStyle}>
                Testimonials
              </div>
              <div className={styles.contact} style={contactStyle}>
                Contact
              </div>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <div className={styles.socialIcons}>
              <img
                className={styles.facebookNegative}
                alt=""
                src={facebookNegative}
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src={twitterNegative}
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src={instagramNegative}
              />
              <img
                className={styles.facebookNegative}
                alt=""
                src={linkedInNegative}
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.copyright} style={copyrightStyle}>
        <div className={styles.copyrightChild} style={rectangleDiv1Style} />
        <div className={styles.mumairAllRightsContainer}>
          <span>{`© 2023 `}</span>
          <b className={styles.mumair1}>{`Mumair `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
