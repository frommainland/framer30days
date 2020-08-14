import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { func } from "prop-types"

export default function UseAnimation04() {
  const animation = useAnimation()
  async function sequence() {
    await animation.start({
      scale: 0.2,
      transition: { duration: 1, ease: "backInOut" },
    })
    await animation.start({
      scale: 0.2,
      transition: { duration: 0.5 },
    })
    await animation.start({
      x: -100,
      y: 0,
      scale: 0.1,
      skew: -5,
      transition: { duration: 0.5 },
    })
    await animation.start({
      x: 0,
      y: 100,
      scale: 2,
      skew: 0,
      rotate: 20,
      transition: { duration: 0.5 },
    })
    await animation.start({
      x: 0,
      transition: { duration: 1 },
    })
    animation.start({
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeIn" },
    })
  }
  return (
    <div
      style={{
        width: 600,
        height: 400,
        background: "LIGHTSLATEGRAY",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          background: "white",
          cursor: "pointer",
        }}
        animate={animation}
        onTap={() => sequence()}
      ></motion.div>
    </div>
  )
}
