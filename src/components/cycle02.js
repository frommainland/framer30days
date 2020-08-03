import React, { useState } from "react"
import { motion, useCycle, AnimatePresence, useReducedMotion } from "framer-motion"

export default function Cycle02() {
    const [color, setColor] = useCycle('#0066FF', '#6DD400')
    const [borderColor, setBorderColor] = useCycle(
        "LimeGreen", "Red"
    )
    return (
        <motion.div
            style={{
                width: 200,
                height: 200,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            animate={{
                background: color,
            }}
            transition={{
                duration: 2
            }}
        >
            <motion.div
                style={{
                    width: 120,
                    height: 60,
                    background: 'white',
                    borderRadius: 60,
                    border: "5px solid LimeGreen"
                }}
                animate={{
                    borderColor: borderColor,
                    transition: {
                        duration: 1
                    }
                }}
                whileTap={{
                    scale: 0.98
                }}
                onTap={
                    () => {
                        setColor()
                        setBorderColor()
                    }
                }
            ></motion.div>
        </motion.div>
    )
}