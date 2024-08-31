import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./root.module.css";

export type RootType = {
  /** Style props */
  rootBackgroundColor?: CSSProperties["backgroundColor"];
  rootPosition?: CSSProperties["position"];
};

const Root: NextPage<RootType> = ({ rootBackgroundColor, rootPosition }) => {
  const rootStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rootBackgroundColor,
      position: rootPosition,
    };
  }, [rootBackgroundColor, rootPosition]);

  return <div className={styles.root} style={rootStyle} />;
};

export default Root;
