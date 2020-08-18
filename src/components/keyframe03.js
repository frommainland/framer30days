import React, { useState } from "react"
import { motion, useAnimation, useCycle } from "framer-motion"

export default function Keyframe03() {
  const control = useAnimation()
  return (
    <div
      style={{
        width: 600,
        height: 400,
        background: "papayawhip",
        boxShadow: "0px 0px 0px 3px #fff",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "white",
        }}
        animate={control}
        transition={{
          duration: 1.5,
          ease: ["circOut", "easeInOut", "easeInOut"],
        }}
        onTap={() =>
          control.start({
            scale: [1, 0.5, 1.5, 1],
          })
        }
        whileHover={{
          filter: "blur(2px)",
        }}
      ></motion.div>
    </div>
  )
}
