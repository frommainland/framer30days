import React, { useState } from "react"
import { motion, useCycle, AnimatePresence, useReducedMotion } from "framer-motion"

export default function Cycle03() {
    const [current, next] = useCycle(
        {
            borderColor: "#32CD32",
            boxShadow: "0px 0px 0px 3px #fff",
        },
        {
            borderColor: "#f00",
            boxShadow: "0px 0px 20px 3px #fff",
        }
    )
    const [text, nextText] = useCycle("Start", "....", "Stop", "....")

    return (
        <motion.div
            style={{
                width: 200,
                height: 200,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'olive'
            }}
        >
            <motion.div
                style={{
                    width: 120,
                    height: 60,
                    background: 'white',
                    borderRadius: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                // initial={{ borderColor: "#32CD32" }}
                animate={
                    current
                }
                transition={{ delay: 1 }}
                onTap={() => {
                    next()
                    nextText()
                    setTimeout(() => {
                        nextText()
                    }, 1000)
                }}
            >
                <p style={{
                    marginBottom: 0
                }}>{text}</p>
            </motion.div>
        </motion.div>
    )
}