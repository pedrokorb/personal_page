import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

export default function ImageToRight(props) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div style={{ maxWidth: '966px' }} className="flex flex-col mb-10 mx-auto py-5 md:flex-row">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        className="flex-1 mb-10 text-center md:mb-0"
      >
        <h2 className="section-title px-8">{props.title}</h2>
        <p className="px-8">{props.subtitle}</p>
      </motion.div>

      <motion.img
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        className="flex-1 my-auto mx-auto w-48 h-48"
        src={props.image}
        alt={props.title}
      />
    </div>
  );
}