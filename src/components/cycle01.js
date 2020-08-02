import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"

export default function Cycle01() {

    const [opacity, setOpacity] = useState(1)

    const [count, nextCount] = useCycle(
        "Uno",
        "Dos",
        "Tres",
        "Cuatro",
        "Cinco",
        "Seis",
        "Siete",
        "Ocho",
        "Nueve",
    )

    return (

        <motion.div
            style={{
                width: 200,
                height: 200,
                background: 'purple',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onTap={
                () => {
                    nextCount()
                }
            }
        >
            <AnimatePresence
                exitBeforeEnter
            >
                <motion.div
                    style={{
                        fontSize: 30,
                        color: 'white',
                        position: 'absolute'
                    }}
                    initial={{
                        scale: 0.5,
                        opacity: 0
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }}

                    exit={{
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                            duration: .2
                        }

                    }}
                    key={count}
                >
                    {count}
                </motion.div>
            </AnimatePresence>
        </motion.div >
    )
}