import type { NextPage } from "next";
import styles from "./btn.module.css";

export type BtnType = {
  className?: string;

  /** Action props */
  onFooterRightContainerClick?: () => void;
};

const Btn: NextPage<BtnType> = ({
  className = "",
  onFooterRightContainerClick,
}) => {
  return (
    <button
      className={[styles.btn, className].join(" ")}
      onClick={onFooterRightContainerClick}
    >
      <div className={styles.hireButtonShape} />
      <div className={styles.hireMe}>{`Hire Me `}</div>
    </button>
  );
};

export default Btn;
