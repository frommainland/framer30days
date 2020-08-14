import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function UseAnimation06() {
  const control = useAnimation()
  const bgColor = ["indianred", "khaki", "springgreen", "cyan"]

  // let divs = []
  // for (let index = 0; index < 4; index++) {
  //   divs.push(
  //     <motion.div
  //       key={index}
  //       style={{
  //         width: 80,
  //         height: 80,
  //         background: "white",
  //         margin: 20,
  //         display: "inline-block",
  //         perspective: 800,
  //       }}
  //       onTap={() =>
  //         async function sequence() {
  //           await control.start({
  //             rotateY: 180,
  //             // background: bgColor[index],
  //             background: "red",
  //             transition: {
  //               duration: 1,
  //             },
  //           })
  //           control.start({
  //             rotateY: 0,
  //             background: "white",
  //             transition: {
  //               duration: 1,
  //             },
  //           })
  //         }
  //       }
  //       animate={control}
  //     ></motion.div>
  //   )
  // }

  return (
    <div
      style={{
        width: 600,
        height: 400,
        background: "midnightblue",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: 80,
          height: 80,
          background: "white",
          margin: 20,
          display: "inline-block",
          perspective: 800,
        }}
        onTap={async () => {
          await control.start(custom => ({
            rotateY: 180,
            backgroundColor: custom,
            transition: { duration: 1 },
          }))
          control.start({
            rotateY: 0,
            backgroundColor: "#fff",
            transition: { duration: 1 },
          })
        }}
        animate={control}
        custom="#19e"
      ></motion.div>
    </div>
  )
}
