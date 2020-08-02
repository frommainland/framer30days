
import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"
export default function ConditionalRender() {
    const [clicking, setClick] = useState(false)
    const [bg, setBg] = useCycle(
        '#D8D8D8',
        '#7FFF00'
    )
    return (
        <motion.div
            style={{
                width: 200,
                height: 200,
                background: bg,
                borderRadius: 40,
                display: 'grid',
                // display: 'inline-flex',
                // justifyContent: 'center',
                // alignItems: 'center'
            }}
            animate={{
                background: bg
            }}
            transition={{
                duration: 2
            }}
            onTap={
                function () {
                    setBg()
                    setClick(!clicking)
                }
            }
        >
            <AnimatePresence>
                {clicking &&
                    <motion.img
                        src={require('../images/check.svg')}
                        style={{
                            originX: 0,
                            originY: 1,
                            margin: 'auto'
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                    />
                }
            </AnimatePresence>

        </motion.div>
    )

}