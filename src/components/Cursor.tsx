import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  trailRef: any;
  cursorRef: any;
}

const Cursor: React.FC<Props> = ({ trailRef, cursorRef }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [draggable, setDraggable] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    if (!cursorRef.current || !trailRef.current) return;

    // @ts-ignore
    setDraggable(
      trailRef.current.className === "cursor-trail trail-interactable drag"
    );

    cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${
      e.clientY - 4
    }px)`;

    // trailRef.current.style.transform = `translate(${e.clientX - 4}px, ${
    //   e.clientY - 4
    // }px)`;

    trailRef.current.animate(
      {
        left: `${e.clientX - 30}px`,
        top: `${e.clientY - 30}px`,
      },
      {
        duration: 500,
        easing: "ease-in", // Specify the easing function here
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(mediaQuery.matches);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return <div />;
  } else {
    return (
      <>
        <motion.div ref={trailRef} className="cursor-trail">
          {draggable ? "Drag or Click " : "\u2197"}
          {}
        </motion.div>
        <motion.div ref={cursorRef} className="cursor"></motion.div>{" "}
      </>
    );
  }
};

export default Cursor;
