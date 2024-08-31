import type { NextPage } from "next";
import styles from "./testimonial-description.module.css";

export type TestimonialDescriptionType = {
  className?: string;
};

const TestimonialDescription: NextPage<TestimonialDescriptionType> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.testimonialDescription, className].join(" ")}
      data-scroll-to="testimonialDescriptionContainer"
    >
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialHeadingParent}>
            <div className={styles.testimonialHeading}>
              <h1 className={styles.testimonials}>Testimonials</h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
        </div>
        <div className={styles.paginationDot}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.authorImage} />
            <div className={styles.quoteMarks}>
              <h3 className={styles.h3}>“</h3>
              <div className={styles.testimonialTwoDetails}>
                <div className={styles.testimonialContentName}>
                  <div className={styles.name}>Name</div>
                  <div className={styles.ceo}>CEO</div>
                </div>
              </div>
            </div>
            <div className={styles.clientDescription}>
              <div className={styles.loremIpsumDolorSitAmetConParent}>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                </div>
                <div className={styles.testimonialFeedback}>
                  <h3 className={styles.h31}>“</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <div className={styles.authorQuoteWrapper}>
              <img
                className={styles.authorQuoteIcon}
                loading="lazy"
                alt=""
                src="/ellipse-10@2x.png"
              />
            </div>
            <h3 className={styles.h32}>“</h3>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.loremIpsumDolorSitAmetConGroup}>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </div>
                  <div className={styles.testimonialOneQuoteEnd}>
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
              <div className={styles.testimonialTwoContent}>
                <div className={styles.frameGroup}>
                  <div className={styles.loremIpsumDolorSitAmetConContainer}>
                    <div className={styles.loremIpsumDolor3}>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </div>
                    <div className={styles.testimonialTwoQuoteEnd}>
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
      </div>
      <div className={styles.testimonialNavigation}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks} />
          <div className={styles.footerLinks1} />
          <div className={styles.footerLinks} />
          <div className={styles.footerLinks} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialDescription;
