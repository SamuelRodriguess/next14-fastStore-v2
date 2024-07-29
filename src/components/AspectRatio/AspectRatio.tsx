import React from "react";

import cn from "classnames";

import styles from "./AspectRatio.module.scss";

const AspectRatio: React.FC<any> = ({
  ratio = "2:3",
  className,
  children,
  testId,
}) => {
  const [width, height] = ratio.split(":").map(Number);

  return (
    <div
      className={cn(
        className,
        styles.aspectRatio,
        styles[`aspectRatio_${width}-${height}`]
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
