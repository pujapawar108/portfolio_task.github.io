import type { NextPage } from "next";
import { useCallback } from "react";
import TestimonialDescription from "./testimonial-description";
import EmailForm1 from "./email-form1";
import styles from "./testimonials-title.module.css";

export type TestimonialsTitleType = {
  className?: string;
};

const TestimonialsTitle: NextPage<TestimonialsTitleType> = ({
  className = "",
}) => {
  const onFooterRightContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={[styles.testimonialsTitle, className].join(" ")}>
      <TestimonialDescription />
      <div className={styles.footerRight} onClick={onFooterRightContainerClick}>
        <div
          className={styles.callToActionTitleParent}
          data-scroll-to="groupContainer"
        >
          <div className={styles.callToActionTitle}>
            <h1
              className={styles.letsDesignTogether}
              data-scroll-to="letsDesignTogether"
            >
              Lets Design Together
            </h1>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <EmailForm1 />
      </div>
    </section>
  );
};

export default TestimonialsTitle;
