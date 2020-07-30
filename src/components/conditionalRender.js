
import React, { useState } from "react"
import { motion } from "framer-motion"
export default function ConditionalRender() {
    const [bg, setBg] = useState('#D8D8D8')
    const [clicking, setClick] = useState(true)
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
                duration: .3
            }}
            onTap={
                function () {
                    setBg('#7FFF00')
                    setClick(!clicking)
                }
            }
        >
            {clicking ?
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
                />
                : null
            }

        </motion.div>
    )

}