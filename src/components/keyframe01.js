import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function Keyframe01() {
  const control = useAnimation()
  function sequence() {
    control.start({
      x: [0, 200, 200, 0, 0],
      y: [0, 0, 200, 200, 0],
      background: ["#FA0", "#60F", "#60F", "#60F", "#FA0"],
      rotate: 360,
      transition: {
        duration: 4,
        times: [0, 0.08, 0.16, 0.25, 1],
      },
    })
  }
  return (
    <div
      style={{
        width: 600,
        height: 400,
        background: "midnightblue",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          background: "#FA0",
        }}
        animate={control}
        whileHover={{
          scale: 1.2,
        }}
        onTap={() => sequence()}
      ></motion.div>
    </div>
  )
}
