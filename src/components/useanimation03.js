import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { func } from "prop-types"

export default function UseAnimation03() {
  const animation = useAnimation()

  let sequence = async function () {
    await animation.start({
      scaleX: 0.2,
      transition: { duration: 0.3, ease: "backInOut" },
    })
    await animation.start({
      scaleY: 0.2,
      transition: { duration: 0.3, ease: "backInOut" },
    })
    animation.start({ scaleX: 1, scaleY: 1, transition: { duration: 1 } })
  }
  return (
    <div
      style={{
        width: 400,
        height: 400,
        background: "ROYALBLUE",
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
          background: "NAVY",
        }}
        animate={animation}
        onTap={() => sequence()}
      ></motion.div>
    </div>
  )
}
