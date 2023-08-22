import { motion } from "framer-motion";

const transition = (OgComponent: any) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 0] }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 2,
          times: [0, 0.3, 0.5],
          // times: [0, 0.8],
        }}
      />
    </>
  );
};

export default transition;
