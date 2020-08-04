import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"

export default function Cycle05() {

    const [bg, setBg] = useCycle(
        'scaleS', 'scaleB'
    )

    // const [current, setCurrent] = useCycle(
    //     'off', 'on'
    // )

    const [position, setPosition] = useCycle(
        { left: 4 },
        { left: 44 }
    )

    const variants = {
        scaleS: {
            scale: 0
        },
        scaleB: {
            scale: 1
        }
    }
    return (
        <div
            style={{
                display: 'inline-block',
                width: 102,
                height: 62,
                background: '#E9E9EA',
                borderRadius: 51,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <motion.div
                style={{
                    width: 102,
                    height: 62,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    background: '#34C759',
                    borderRadius: 51
                }}
                initial={false}
                variants={variants}
                animate={bg}
                transition={{ ease: "easeInOut" }}
            >
            </motion.div>

            <motion.div
                style={{
                    width: 54,
                    height: 54,
                    borderRadius: 27,
                    background: 'white',
                    boxShadow: '0 6px 16px 0 rgba(0,0,0,0.15), 0 6px 2px 0 rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    position: 'absolute',
                    left: 4,
                    top: '50%',
                    marginTop: -27
                }}
                animate={position}
                transition={{ ease: "easeInOut" }}
                onTap={
                    () => {
                        setBg()
                        setPosition()
                    }
                }>
            </motion.div>
        </div >
    )
}