import React, { useEffect, useRef, useState } from "react";
import {
  PanInfo,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import GalleryItem from "./GalleryItem";

interface Props {
  cursorRef: any;
  trailRef: any;
}

const galleryItems = [
  "../../public/image1.jpg",
  "../../public/image2.jpg",
  "../../public/image3.jpg",
  "../../public/image2.jpg",
  "../../public/image2.jpg",
  "../../public/image3.jpg",
  "../../public/image1.jpg",
  "../../public/image3.jpg",
  // Add more image paths
];

const GallerySlider: React.FC<Props> = ({ cursorRef, trailRef }) => {
  const offsetX = useMotionValue(0);
  const dragX = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  const carouselRef = useRef(null);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    dragX.set(info.point.x);
  };

  useMotionValueEvent(dragX, "change", (latest) => {
    console.log("x changed to", latest);
  });

  const rotation = useTransform(dragX, [0], [0]);

  const onMouseEnter = () => {
    cursorRef.current.className = "cursor interactable";
    trailRef.current.className = "cursor-trail trail-interactable";
  };

  const onMouseLeave = () => {
    cursorRef.current.className = "cursor";
    trailRef.current.className = "cursor-trail";
  };

  return (
    <motion.div className="carousel" ref={carouselRef}>
      <motion.div
        _dragX={dragX}
        drag={"x"}
        // style={{ backgroundColor: "red", width: "100%" }}
        className="inner-carousel"
        dragTransition={{ bounceStiffness: 600, bounceDamping: 1000 }}
      >
        <motion.div
          className="box"
          style={{ borderRadius: 200, rotateY: dragX }}
        >
          {galleryItems.map((image, index) => {
            return (
              <GalleryItem
                image={image}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                index={index}
                key={index}
              />
            );
          })}
        </motion.div>
      </motion.div>
      {/* <motion.div onDrag={handleDrag} className="inner-carousel">
        {galleryItems.map((image, index) => {
          return (
            <GalleryItem
              image={image}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              index={index}
              key={index}
              dragX={dragX}
            />
          );
        })}
      </motion.div> */}
    </motion.div>
  );
};

export default GallerySlider;
