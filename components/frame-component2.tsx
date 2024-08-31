import type { NextPage } from "next";
import ProjectContent from "./project-content";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  loremIpsumDolorAlignSelf?: string;
  loremIpsumDolorPadding?: string;
  loremIpsumDolorFlex?: string;
  propColor?: string;
  propColor1?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPadding,
  loremIpsumDolorFlex,
  propColor,
  propColor1,
}) => {
  return (
    <div className={[styles.servicesContentWrapper, className].join(" ")}>
      <ProjectContent
        loremIpsumDolorAlignSelf={loremIpsumDolorAlignSelf}
        loremIpsumDolorPadding={loremIpsumDolorPadding}
        loremIpsumDolorFlex={loremIpsumDolorFlex}
        propColor={propColor}
        propColor1={propColor1}
      />
    </div>
  );
};

export default FrameComponent2;
