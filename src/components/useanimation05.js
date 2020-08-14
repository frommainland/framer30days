import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function UseAnimation05() {
  const controls = useAnimation()
  async function sequence() {
    await controls.start({
      rotate: 30,
    })
    await controls.start({
      x: 50,
      y: -50,
      radius: "50%",
      opacity: 0.5,
    })
    await controls.start({
      y: 50,
      rotate: -30,
    })
    await controls.start({
      x: 0,
      y: 0,
      radius: 20,
      opacity: 1,
    })
    controls.start({
      rotate: 0,
    })
  }

  let divs = []
  for (let index = 0; index < 4; index++) {
    divs.push(
      <motion.div
        key={index}
        style={{
          width: 80,
          height: 80,
          background: "white",
          borderRadius: 20,
        }}
        animate={controls}
      ></motion.div>
    )
  }

  return (
    <motion.div
      style={{
        width: 600,
        height: 400,
        background: "DARKMAGENTA",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onTap={() => sequence()}
    >
      {divs}
    </motion.div>
  )
}
