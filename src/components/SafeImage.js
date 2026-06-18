import React, { useEffect, useState } from 'react';
import fallbackImage from '../assets/product-fallback.png';

const getImageSrc = (src) => {
  if (!src || typeof src !== 'string') {
    return fallbackImage;
  }

  const markdownUrl = src.match(/\]\((https?:\/\/[^)]+)\)$/);
  if (markdownUrl) {
    return markdownUrl[1];
  }

  return src;
};

const SafeImage = ({ src, alt = '', fallbackSrc = fallbackImage, onError, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(getImageSrc(src));

  useEffect(() => {
    setCurrentSrc(getImageSrc(src));
  }, [src]);

  const handleError = (event) => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }

    if (onError) {
      onError(event);
    }
  };

  return <img {...props} src={currentSrc} alt={alt} onError={handleError} />;
};

export const SafeHoverImage = ({
  src,
  hoverSrc,
  alt = '',
  fallbackSrc = fallbackImage,
  onMouseEnter,
  onMouseLeave,
  onError,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [primaryFailed, setPrimaryFailed] = useState(false);
  const [hoverFailed, setHoverFailed] = useState(false);

  const primarySrc = primaryFailed ? fallbackSrc : getImageSrc(src);
  const hoverImageSrc = hoverFailed ? primarySrc : getImageSrc(hoverSrc || src);
  const currentSrc = isHovering ? hoverImageSrc : primarySrc;

  useEffect(() => {
    setPrimaryFailed(false);
    setHoverFailed(false);
  }, [src, hoverSrc]);

  const handleMouseEnter = (event) => {
    setIsHovering(true);

    if (onMouseEnter) {
      onMouseEnter(event);
    }
  };

  const handleMouseLeave = (event) => {
    setIsHovering(false);

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  };

  const handleError = (event) => {
    if (isHovering) {
      setHoverFailed(true);
    } else {
      setPrimaryFailed(true);
    }

    if (onError) {
      onError(event);
    }
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onError={handleError}
    />
  );
};

export default SafeImage;
