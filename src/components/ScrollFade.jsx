import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollFade = ({ children, className, threshold = 0.2, duration = 0.8, delay = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
