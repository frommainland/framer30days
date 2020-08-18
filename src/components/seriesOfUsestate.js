import React, { useState } from "react"
import { motion } from "framer-motion"

export default function SeriesOfUsestate() {
  // let degree = 0
  // function add45() {
  //     return degree = degree + 45
  // }
  // const [animate, setAnimate] = useState({ scale: 1, rotate: degree })
  const [scale, setScale] = useState(1)
  const [degree, setDegree] = useState(0)
  function add45() {
    setDegree(degree + 45)
  }

  const [drag, setdrag] = useState(false)

  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      <motion.div
        style={{
          height: 200,
          width: 200,
          background: "yellow",
          borderRadius: 60,
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{ scale: scale, rotate: degree }}
        onTapStart={function () {
          add45()
          setScale(1.5)
        }}
        onTap={() => setScale(1)}
      >
        tapscale
      </motion.div>
      <motion.div
        style={{
          marginLeft: 50,
          width: 400,
          height: 400,
          background: "#60F",
          overflow: "hidden",
          display: "inline-block",
        }}
        animate={{
          backgroundColor: drag ? "#09F" : "#60F",
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.div
          style={{
            width: 100,
            height: 100,
            background: "white",
          }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 300,
            bottom: 300,
          }}
          animate={{
            scale: drag ? 1.2 : 1,
          }}
          onDragStart={() => setdrag(true)}
          onDragEnd={() => setdrag(false)}
        ></motion.div>
      </motion.div>
    </div>
  )
}
