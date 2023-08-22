import React, { MouseEventHandler, useState } from "react";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

interface Props {
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
  image: string;
  index: number;
}

const GalleryItem: React.FC<Props> = ({
  image,
  onMouseEnter,
  onMouseLeave,
  index,
}) => {
  return (
    <motion.span
      className="item"
      style={{ rotateY: index * 45, translateZ: 0 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="img-wrapper">
        <img src={image} alt={image} />
      </div>
    </motion.span>
  );
};
export default GalleryItem;
