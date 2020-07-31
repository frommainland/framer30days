import React, { useState } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"



export default function BatteryButton() {
    const [count, setCount] = useState(0)
    let blocks = []

    for (let i = 0; i < count; i++) {
        let clr = i > 5 ? (i > 8 ? "OrangeRed" : "Orange") : "LimeGreen"
        let margin = i < 9 ? 4 : 0
        blocks.push(
            <motion.div
                style={{
                    background: clr,
                    height: 12,
                    width: "100%",
                    borderRadius: 10,
                    originY: 1,
                    marginTop: margin
                }}
                initial={{
                    scaleY: 0
                }}
                animate={{
                    scaleY: 1
                }}
                key={i}
                exit={{
                    scaleY: 0
                }}
            >

            </motion.div >
        )
    }
    return (
        // bg
        <div
            style={{
                height: 240,
                width: 240,
                background: '#0066FF',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {/* white bg */}
            <div
                style={{
                    height: 180,
                    width: 100,
                    background: 'white',
                    borderRadius: 10,
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {/* content wrap */}
                <div>
                    {/* button wrap */}
                    <motion.div
                        style={{
                            width: 36,
                            display: 'inline-block',
                            marginRight: 4
                        }}>
                        <motion.img
                            src={require('../images/addButton.svg')}
                            style={{
                                margin: 0
                            }}
                            onTap={
                                () => {
                                    if (count < 10) { setCount(count + 1) }
                                }}
                        />
                        <motion.img
                            src={require('../images/subButton.svg')}
                            style={{
                                margin: 0
                            }}
                            onTap={
                                () => {
                                    if (count > 0) {
                                        setCount(count - 1)
                                    }
                                }
                            }
                        />
                    </motion.div>
                    {/* bar wrap */}
                    <div style={{
                        width: 36,
                        height: '100%',
                        display: 'inline-flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column-reverse'
                    }}>
                        <AnimatePresence>{blocks}</AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    )
}