import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function UseAnimation02() {
  const controls = useAnimation()
  let timeout
  return (
    <div
      style={{
        width: 300,
        height: 300,
        background: "DARKMAGENTA",
        display: "inline-block",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          cursor: "grab",
          position: "absolute",
        }}
        drag
        animate={controls}
        onDragEnd={() => {
          timeout = setTimeout(() => {
            controls.start({ x: -100, y: 0 })
          }, 100)
        }}
        onDragStart={() => clearTimeout(timeout)}
        whileTap={{ cursor: "grabbing" }}
      ></motion.div>
    </div>
  )
}
