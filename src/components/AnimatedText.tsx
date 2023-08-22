import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface Props {
  title: string;
  banner?: boolean;
  delay?: number;
  textClassName?: string;
  bannerClassName?: string;
}

const AnimatedText: React.FC<Props> = ({
  title,
  banner = false,
  delay = 0,
  textClassName,
  bannerClassName,
}) => {
  const letterAnimation = {
    initial: {
      y: bannerClassName ? 100 : 300,
    },
    animate: (index: number) => ({
      y: 0,
      transition: {
        delay: 0.03 * index + delay,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    }),
    exit: {
      y: bannerClassName ? 100 : 300,
      transition: (index: number) => ({
        delay: 0.03 * index + delay,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      }),
    },
  };
  return (
    <div className={bannerClassName ? bannerClassName : "banner"}>
      <motion.span className={textClassName ? textClassName : "heading"}>
        {[...title].map((letter, index) => {
          const outline =
            letter === "&" ||
            letter === "W" ||
            title[index - 1] === "W" ||
            title[index - 2] === "W";

          return (
            <motion.span
              // className="heading"
              key={index}
              variants={letterAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ zIndex: index % 2 === 1 ? 3 : 1 }}
              className={outline && banner ? "outline" : ""}
              custom={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
