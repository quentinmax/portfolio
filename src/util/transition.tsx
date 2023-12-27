import { motion } from "framer-motion";

const transition = (OgComponent: any) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0, translateY: 0 }}
        animate={{
          scaleY: [0, 1],
          translateY: -1000,
          // scaleY: 0,
        }}
        exit={{ scaleY: 1, translateY: 0 }}
        transition={{
          // duration: 2,
          // times: [0, 0.3, 0.5],
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      {/* <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 0, 0],
        }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          // duration: 2,
          // times: [0, 0.3, 0.5],
        }}
      /> */}
    </>
  );
};

export default transition;
