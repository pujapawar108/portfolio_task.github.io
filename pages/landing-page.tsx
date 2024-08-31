import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent from "../components/frame-component";
import ServicesInner from "../components/services-inner";
import Footer from "../components/footer";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent3 />
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <div className={styles.uiuxWrapper}>
        <div className={styles.uiux}>UI/UX</div>
      </div>
      <FrameComponent4 />
      <FrameComponent
        webDesigns="/web-designs-2@2x.png"
        webDesigns1="/web-designs-4@2x.png"
        webDesigns11="/web-designs-3@2x.png"
        webDesigns12="/web-designs-5@2x.png"
        businessLandingPageDesign="Business Landing Page Design "
        businessLandingPageDesign1="Ecom Web Page Design "
        propColor4="#1e1e1e"
      />
      <ServicesInner />
      <Footer
        facebookNegative="/facebook--negative1.svg"
        twitterNegative="/twitter--negative1.svg"
        instagramNegative="/instagram--negative1.svg"
        linkedInNegative="/linkedin--negative1.svg"
      />
    </div>
  );
};

export default LandingPage;
