import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"

export default function MoonCarousel() {
    const [current, setCurrent] = useState(0)
    const [buttonOpacity, setButtonOpacity] = useState(1)
    const [direction, setDirection] = useState('forward')

    const variants = {
        initial: (direction) => ({
            rotateY: direction === "forward" ? -45 : 45,
            opacity: 0,
        }),
        animate: { rotateY: 0, opacity: 1 },
        exit: (direction) => ({
            rotateY: direction === "forward" ? 45 : -45,
            opacity: 0,
        }),
    }

    const emojis = ["🌕", "🌔", "🌓", "🌒", "🌑", "🌘", "🌗", "🌖"]
    return (
        <div
            style={{
                width: 400,
                height: 200,
                background: 'black',
                display: 'inline-block',
                position: 'relative'
            }}>
            <AnimatePresence
                onExitComplete={
                    () => {
                        setButtonOpacity(1)
                    }
                }
            >
                <motion.div
                    style={{
                        fontSize: 100,
                        originZ: -100,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin: '-50px 0 0 -50px'
                    }}
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit="exit"
                    key={current}
                    custom={direction}
                    transition={{ duration: 1 }}

                >
                    {emojis[current]}
                </motion.div>
            </AnimatePresence>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100%'
                }}>

                {/* left button */}
                <motion.div
                    style={{
                        height: 54,
                        width: 54,
                        background: 'white',
                        borderRadius: 27
                    }}
                    onTap={
                        () => {
                            setDirection('forward')
                            if (current === 0) {
                                setCurrent(emojis.length - 1)
                            } else {
                                setCurrent(current - 1)
                            }
                            setButtonOpacity(0)
                        }
                    }
                    animate={{
                        opacity: buttonOpacity
                    }}
                >
                </motion.div>



                {/* right button */}
                <motion.div
                    style={{
                        height: 54,
                        width: 54,
                        background: 'white',
                        borderRadius: 27
                    }}
                    onTap={
                        () => {
                            setDirection('backward')
                            if (current === emojis.length - 1) {
                                setCurrent(0)
                            } else {
                                setCurrent(current + 1)
                            }
                            setButtonOpacity(0)
                        }
                    }
                    animate={{
                        opacity: buttonOpacity
                    }}
                >
                </motion.div>

            </div>
        </div>
    )
}