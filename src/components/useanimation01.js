import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function UseAnimation01() {

    const animation = useAnimation()
    const animation2 = useAnimation()

    return (
        <div
            style={{
                width: 400,
                height: 250,
                background: 'coral',
                display: 'inline-flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}
        >
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    background: 'gold'
                }}
                animate={animation}
                onHoverStart={
                    () => {
                        animation.start({ scale: 1.2, transition: { yoyo: Infinity } })
                    }

                }
                onHoverEnd={
                    () => {
                        animation.stop()
                    }
                }
            ></motion.div>
            <motion.div
                style={{
                    width: 100,
                    height: 100,
                    background: 'yellow'
                }}
                animate={animation2}
                onHoverStart={
                    () => {
                        animation2.start({ scale: 1.2, transition: { yoyo: Infinity } })
                    }
                }
                onHoverEnd={
                    () => animation2.start({ scale: 1 })
                }

            ></motion.div>

        </div>
    )

}