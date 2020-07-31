import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"

export default function BallCarousel() {
    const [current, setCurrent] = useState(0)

    const emojis = ["⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🎱"]
    return (
        // bg
        <div
            style={{
                width: 400,
                height: 200,
                background: 'black',
                display: 'inline-block'
            }}>
            {/* content wrap*/}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100%'
                }}>
                {/* arrow left */}
                <motion.div
                    style={{
                        height: 54,
                        width: 54,
                        background: 'white',
                        borderRadius: 27
                    }}
                    onTap={
                        () => {
                            if (current === 0) {
                                setCurrent(emojis.length - 1)
                            } else {
                                setCurrent(current - 1)
                            }
                        }
                    }
                ></motion.div>

                <AnimatePresence exitBeforeEnter initial={false}>
                    <motion.div
                        style={{
                            fontSize: 100,
                            position: 'absolute',
                        }}
                        initial={{
                            scale: 0,
                            rotate: -180
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0
                        }}
                        exit={{
                            scale: 0,
                            rotate: -180
                        }}
                        key={current}
                    >{emojis[current]}
                    </motion.div>
                </AnimatePresence>

                {/* arrow right */}
                <motion.div
                    style={{
                        height: 54,
                        width: 54,
                        background: 'white',
                        borderRadius: 27
                    }}
                    onTap={
                        () => {
                            if (current === emojis.length - 1) {
                                setCurrent(0)
                            } else {
                                setCurrent(current + 1)
                            }
                        }
                    }
                ></motion.div>


            </div>
        </div >
    )
}