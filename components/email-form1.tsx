import type { NextPage } from "next";
import styles from "./email-form1.module.css";

export type EmailForm1Type = {
  className?: string;
};

const EmailForm1: NextPage<EmailForm1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.emailForm, className].join(" ")}>
      <div className={styles.formFields}>
        <div className={styles.labels}>
          <div className={styles.labelsChild} />
          <input
            className={styles.enterYourEmail}
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <button className={styles.formLabels}>
          <div className={styles.formLabelsChild} />
          <div className={styles.contactMe}>{`Contact Me `}</div>
        </button>
      </div>
    </div>
  );
};

export default EmailForm1;
