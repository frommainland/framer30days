import React, { useState } from "react"
import { motion, useAnimation, useCycle } from "framer-motion"

export default function Keyframe02() {
  const [current, next] = useCycle(
    { borderColor: "#fff", scale: 0.5 },
    {
      borderColor: "#32CD32",
      scale: [0.5, 1, 0.8, 1.2],
      transition: {
        times: [0, 0.2, 0.8, 1],
      },
    }
  )
  return (
    <div
      style={{
        width: 600,
        height: 400,
        background: "darkslategray",
        boxShadow: "0px 0px 0px 3px #fff",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 200,
          height: 100,
          background: "white",
          border: "5px solid #32CD32",
          boxShadow: "0px 0px 0px 5px white",
          borderRadius: 50,
        }}
        whileHover={{
          borderColor: ["#32CD32", "#fff", "#32CD32"],
          transition: {
            times: [0.5, 0.75, 1],
            duration: 1,
          },
        }}
        animate={current}
        onTap={() => {
          console.log(1)
          next()
        }}
      ></motion.div>
    </div>
  )
}
