import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const CostumersSection = ({ title, children, subtitle, id }) => {

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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
    >
      <h2 className="section-title text-center px-8">{title}</h2>
      <p className="text-center py-5 mb-12 px-8">{subtitle}</p>
      {children}
    </motion.div>
  )
}

export default CostumersSection
