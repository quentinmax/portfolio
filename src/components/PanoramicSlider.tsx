import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate, useNavigation } from "react-router-dom";

interface Props {
  cursorRef: any;
  trailRef: any;
}

const projects = [
  {
    name: "Summit",
    description: "A mountaineering smartphone app",
    thumbnail: "url(/image1.jpg)",
    tags: ["mobile", "react-native"],
  },
  {
    name: "KAB",
    description: "Portfolio Website for a architecture office",
    thumbnail: "url(/image2.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Test",
    description: "Test Text Here",
    thumbnail: "url(/image1.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Oliver Höhne",
    description: "Portfolio Website for an energy consultant",
    thumbnail: "url(/image3.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Retard",
    description: "A 2D multiplayer game",
    thumbnail: "url(/image2.jpg)",
    tags: ["game-dev", "unity"],
  },
  {
    name: "Summit",
    description: "A mountaineering smartphone app",
    thumbnail: "url(/image1.jpg)",
    tags: ["mobile", "react-native"],
  },
  {
    name: "KAB",
    description: "Portfolio Website for a architecture office",
    thumbnail: "url(/image3.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Test",
    description: "Test Text Here",
    thumbnail: "url(/image2.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Oliver Höhne",
    description: "Portfolio Website for an energy consultant",
    thumbnail: "url(/image3.jpg)",
    tags: ["web", "react"],
  },
  {
    name: "Retard",
    description: "A 2D multiplayer game",
    thumbnail: "url(/image2.jpg)",
    tags: ["game-dev", "unity"],
  },
  {
    name: "KAB",
    description: "Portfolio Website for a architecture office",
    thumbnail: "url(/image1.jpg)",
    tags: ["web", "react"],
  },
];

const SCROLL_MULTIPLICATOR = 0.5;

const PanoramicSlider: React.FC<Props> = ({ cursorRef, trailRef }) => {
  const { scrollY } = useScroll();

  const [isDragging, setDragging] = useState(false);
  const rotation = useMotionValue(0);
  const spinner = useRef();

  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 100 && latest <= 1200) {
      rotation.set(
        rotation.get() + SCROLL_MULTIPLICATOR * Math.sign(scrollY.getVelocity())
      );
    }
  });

  const onMouseEnter = () => {
    cursorRef.current.className = "cursor interactable";
    trailRef.current.className = "cursor-trail trail-interactable drag";
  };

  const onMouseLeave = () => {
    cursorRef.current.className = "cursor";
    trailRef.current.className = "cursor-trail";
  };

  const dragging = (e: React.MouseEvent) => {
    if (!isDragging) return;
    // @ts-ignore

    spinner.current!.className = "spinner dragging";
    rotation.set(rotation.get() - e.movementX * 0.12);
  };

  const handleDragClick = () => {
    // @ts-ignore
    spinner.current!.className = "spinner";
    setDragging(false);
  };

  const onMouseDown = (name: string) => {
    // @ts-ignore
    if (spinner.current!.className === "spinner dragging") {
      return;
    } else {
      navigate(`/project/${name}`);
    }
  };
  return (
    <>
      <div
        className="slider draggable"
        onMouseMove={dragging}
        onMouseDown={() => setDragging(true)}
        onMouseUp={handleDragClick}
      >
        <motion.figure
          // @ts-ignore
          ref={spinner}
          className="spinner"
          style={{ rotateY: rotation }}
        >
          {projects.map(({ thumbnail, description, name, tags }, index) => {
            const startRot = index * (360 / projects.length);

            return (
              <div
                key={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={() => onMouseDown(name)}
                className="spinner-item spinner-item-content"
                style={
                  {
                    "--thumb": thumbnail,
                    "--rotation": `${-startRot}deg`,
                  } as React.CSSProperties
                }
              >
                <div className="content-wrapper">
                  <p>{description}</p>
                  <h1>{name}</h1>
                  <hr />
                  <h2>{tags.join(" · ")}</h2>
                </div>
              </div>
              // <div
              //   className="spinner-item cover"
              //   key={`cover ${index}`}
              //   style={
              //     {
              //       "--rotation": `${-index * (360 / 11)}deg`,
              //     } as React.CSSProperties
              //   }
              // />
            );
          })}
        </motion.figure>
        {/* <button onClick={handleRotate}>Rotate</button> */}
      </div>
    </>
  );
};

export default PanoramicSlider;
