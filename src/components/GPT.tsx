import { motion, HTMLMotionProps } from "framer-motion";
import { useState, MouseEvent, TouchEvent } from "react";

const initialXPos = 0;

const ImageGallery: React.FC = () => {
  const [xPos, setXPos] = useState<number>(initialXPos);
  const [motionImages, setMotionImages] = useState<JSX.Element[]>([]);

  const handleDragStart = (e: MouseEvent & TouchEvent) => {
    if ("touches" in e) e.clientX = e.touches[0].clientX;
    setXPos(Math.round(e.clientX));
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDrag = (e: any) => {
    if ("touches" in e) e.clientX = e.touches[0].clientX;

    // Calculate the rotation value based on drag movement
    const rotationChange = ((Math.round(e.clientX) - xPos) % 360) * -1;

    // Update the background position based on rotationChange
    const updatedBgPositions = Array.from({ length: 10 }, (_, i) =>
      getBgPos(i, rotationChange)
    );

    // Update the motionImages state with the new background positions
    setMotionImages(
      updatedBgPositions.map((bgPosition, i) => (
        <motion.div
          key={i}
          className="img"
          style={{
            backgroundPosition: bgPosition,
            backgroundImage: "https://swiperjs.com/demos/images/nature-2.jpg",
            // Other styles for your images
          }}
          animate={{ y: 0 }}
          initial={{ y: 200 }}
          transition={{ duration: 1.5, delay: i * 0.1, ease: "expo" }}
          whileHover={{ cursor: "pointer" }}
        />
      ))
    );

    // Update the state with the new x position
    setXPos(Math.round(e.clientX));
  };

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchend", handleDragEnd);
  };

  const getBgPos = (i: number, rotationChange: number): string => {
    // Calculate and return the updated background position for each image
    const rotationY = rotationChange + i * -36;
    const bgPositionX = 100 - (((rotationY % 360) + 360) % 360) * (500 / 360); // Adjusted calculation
    return `${bgPositionX}px 0px`;
  };

  return (
    <div
      className="ring"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      {motionImages}
    </div>
  );
};

export default ImageGallery;
