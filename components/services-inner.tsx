import type { NextPage } from "next";
import EmailForm1 from "./email-form1";
import styles from "./services-inner.module.css";

export type ServicesInnerType = {
  className?: string;
};

const ServicesInner: NextPage<ServicesInnerType> = ({ className = "" }) => {
  return (
    <section className={[styles.servicesInner, className].join(" ")}>
      <div className={styles.testimonialContent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.profilePicture} />
          <div className={styles.testimonialQuote}>
            <h3 className={styles.h3}>“</h3>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorDetails}>
                <div className={styles.name}>Name</div>
                <div className={styles.ceo}>CEO</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialFeedback}>
            <div className={styles.feedbackDetails}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </div>
              <div className={styles.feedbackAuthor}>
                <h3 className={styles.h31}>“</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.profileImagesWrapper}>
            <img
              className={styles.profileImagesIcon}
              loading="lazy"
              alt=""
              src="/ellipse-10@2x.png"
            />
          </div>
          <h3 className={styles.h32}>“</h3>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.loremIpsumDolorSitAmetConParent}>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                </div>
                <div className={styles.feedbackClosingQuote}>
                  <h3 className={styles.h31}>“</h3>
                </div>
              </div>
              <div className={styles.nameParent}>
                <div className={styles.name1}>Name</div>
                <div className={styles.ceo1}>CEO</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <img
            className={styles.ellipseIcon}
            loading="lazy"
            alt=""
            src="/ellipse-11@2x.png"
          />
          <div className={styles.parent}>
            <h3 className={styles.h32}>“</h3>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.loremIpsumDolorSitAmetConGroup}>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </div>
                  <div className={styles.closingQuoteMark}>
                    <h3 className={styles.h35}>“</h3>
                    <div className={styles.name2}>Name</div>
                  </div>
                </div>
                <div className={styles.ceo2}>CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactFormWrapper}>
        <div className={styles.contactForm}>
          <div className={styles.contactTitle}>
            <div className={styles.designElements}>
              <div className={styles.fourDots} />
              <div className={styles.fourDots1} />
              <div className={styles.fourDots} />
              <div className={styles.fourDots} />
            </div>
          </div>
          <div className={styles.contactSubheading}>
            <div className={styles.contactSubheader}>
              <h1 className={styles.letsDesignTogether}>
                Lets Design Together
              </h1>
            </div>
            <div className={styles.loremIpsumDolor3}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
          <EmailForm1 />
        </div>
      </div>
    </section>
  );
};

export default ServicesInner;
