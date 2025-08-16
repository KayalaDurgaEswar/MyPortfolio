import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return { ref, controls, isInView };
};

export const scrollVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};