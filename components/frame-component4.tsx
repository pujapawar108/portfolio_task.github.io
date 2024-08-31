import type { NextPage } from "next";
import Btn from "./btn";
import DesignCategories from "./design-categories";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.servicesContentWrapper, className].join(" ")}>
      <div className={styles.servicesContent}>
        <div className={styles.servicesHeading}>
          <div className={styles.heroInfo}>
            <div className={styles.servicesHeading1}>
              <div className={styles.introduction}>
                <div className={styles.greetings}>
                  <div className={styles.role}>
                    <div className={styles.contactParent}>
                      <div className={styles.contact}>
                        <div className={styles.hiIAm}>{`Hi I am `}</div>
                      </div>
                      <h3
                        className={styles.muhammadUmair}
                      >{`Muhammad Umair `}</h3>
                    </div>
                  </div>
                  <h1 className={styles.uiUx}>{`UI & UX`}</h1>
                </div>
                <div className={styles.socialLinks}>
                  <div className={styles.intro}>
                    <div className={styles.review}>
                      <div className={styles.role1}>
                        <h1 className={styles.designer}>{`Designer `}</h1>
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.imagePlaceholderChild}
                  loading="lazy"
                  alt=""
                  src="/group-21@2x.png"
                />
                <div className={styles.background} />
              </div>
              <div className={styles.aboutInner}>
                <div className={styles.socialLinksItems}>
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative1.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative1.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative1.svg"
                  />
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/linkedin--negative1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerTopParent}>
          <div className={styles.footerTop}>
            <img
              className={styles.imagePlaceholderChild}
              loading="lazy"
              alt=""
              src="/group-7@2x.png"
            />
            <div className={styles.aboutImageShape} />
          </div>
          <div className={styles.aboutDetailsWrapper}>
            <div className={styles.aboutDetails}>
              <h1 className={styles.aboutMe}>{`About Me `}</h1>
              <div className={styles.footerDetails}>
                <div className={styles.aboutDescription}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                </div>
                <div className={styles.skillList}>
                  <div className={styles.ux}>UX</div>
                  <div className={styles.uXIconsWrapper}>
                    <div className={styles.uXIcons}>
                      <div className={styles.skillProgressBars} />
                      <div className={styles.frameItem} />
                      <div className={styles.skillProgressPoint} />
                    </div>
                  </div>
                </div>
                <DesignCategories websiteDesign="Website Design" />
                <DesignCategories
                  websiteDesign="App Design "
                  propColor="#000"
                  propWidth="721px"
                  propRight="20px"
                />
                <div className={styles.skillList1}>
                  <div
                    className={styles.graphicDesign}
                  >{`Graphic Design `}</div>
                  <div className={styles.uXIconsWrapper}>
                    <div className={styles.uXIcons}>
                      <div className={styles.skillProgressBars} />
                      <div className={styles.frameItem} />
                      <div className={styles.skillProgressPoint} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
