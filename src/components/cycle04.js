import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"

export default function Cycle04() {
    const aWidth = 400
    const aHeight = 400
    const bWidth = 100
    const bHeight = 100
    const centerX = aHeight / 2 - bHeight / 2
    const centerY = aHeight / 2 - bHeight / 2
    const [position, setPosition] = useCycle(
        'center', 'topleft', 'topright', 'botright', 'botleft'

    )
    const variants = {
        center: { left: centerX, top: centerY },
        topleft: { left: centerY - 100, top: centerY - 100 },
        topright: { left: centerY + 100, top: centerY - 100 },
        botright: { left: centerY + 100, top: centerY + 100 },
        botleft: { left: centerY - 100, top: centerY + 100 },
    }
    return (
        <div
            style={{
                width: aWidth,
                height: aHeight,
                background: 'blue',
                display: 'inline-block',
                position: 'relative'
            }}
        >
            <motion.div
                style={{
                    width: bWidth,
                    height: bHeight,
                    background: 'white',
                    borderRadius: 20,
                    position: 'absolute',
                    left: centerX,
                    top: centerY
                }}
                animate={position}
                variants={variants}
                onHoverStart={
                    () => {
                        setPosition()
                    }
                }
            >

            </motion.div>
        </div>
    )
}