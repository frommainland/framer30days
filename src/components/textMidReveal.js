import React from "react"
import { motion } from "framer-motion"

export default function TextMidReveal() {
    return (
        <div
            style={{
                padding: 50,
                background: 'red',
                width: 400,
                display: 'inline-block'
            }}>
            <div
                style={{
                    overflow: 'hidden',
                    height: 50,
                }}>
                <motion.h1
                    style={{
                        fontSize: 50,
                    }}
                    initial={{
                        y: 50 * 2
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        yoyo: Infinity,
                        repeatDelay: 1
                    }}
                >
                    First Line
                </motion.h1>
            </div>
            <div
                style={{
                    background: 'red',
                    overflow: 'hidden',
                    height: 50,

                }}>
                <motion.h1
                    style={{
                        fontSize: 50
                    }}
                    initial={{
                        y: -50 * 2
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        yoyo: Infinity
                    }}
                >
                    Second Line
                </motion.h1>
            </div>
        </div>
    )
}