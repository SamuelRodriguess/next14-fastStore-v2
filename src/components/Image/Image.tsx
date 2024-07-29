import React, { useState, useEffect, useRef } from "react";
import type { FC } from "react";

import cn from "classnames";

import AspectRatio from "../AspectRatio/AspectRatio";

import styles from "./Image.module.scss";

const Image: FC<any> = ({
  src,
  altText = "image",
  alt,
  className,
  hasLazyLoad = true,
  intersectionVisibleOptions = {
    root: undefined,
    rootMargin: "200% 0px",
    threshold: 0,
  },
  ratio = "2:3",
  sources,
  testId,
  classNameWrapper,
  onLoad = () => {},
}) => {
  const [imageSrc, setImageSrc] = useState<string>(!hasLazyLoad ? src : "");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  const resultingAltText = alt || altText;

  const handleImageLoad = (): void => {
    setIsLoaded(true);
    if (onLoad && typeof onLoad === "function") onLoad();
  };

  useEffect(() => {
    if (isLoaded) {
      if (src !== imageSrc) {
        setImageSrc(!hasLazyLoad ? src : "");
        setIsLoaded(false);
      } else {
        return () => {};
      }
    }

    const observer = new IntersectionObserver(([observerEntry]) => {
      if (observerEntry.isIntersecting) {
        setImageSrc(src);
      }
    }, intersectionVisibleOptions);

    const reference = imageWrapperRef.current;
    if (reference) observer.observe(reference);

    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, [src, intersectionVisibleOptions, isLoaded, imageSrc, hasLazyLoad]);

  return (
    <AspectRatio ratio={ratio} testId={testId} className={classNameWrapper}>
      <picture
        ref={imageWrapperRef}
        className={cn(className, styles.imageWrapper)}
      >
        {/*         {sourceElements}
         */}{" "}
        <img
          src={imageSrc}
          alt={resultingAltText}
          className={styles.image}
          onLoad={handleImageLoad}
        />
      </picture>
    </AspectRatio>
  );
};

export default Image;
