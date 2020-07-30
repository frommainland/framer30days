import React from "react"
import { motion } from "framer-motion"

export default function JumpTop() {

    const string = Array.from('First Line')

    const containerVariant = {
        before: {},
        after: {
            transition: {
                staggerChildren: 0.06,
            }
        }
    }
    const textVariant = {
        before: {
            y: -50,
            opacity: 0
        },
        after: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
                flip: Infinity
            }
        }
    }

    return (
        <motion.div
            style={{
                width: 400,
                height: 200,
                background: 'teal',
                display: 'inline-flex',
                justifyContent: 'center'
            }}
            variants={containerVariant}
            initial='before'
            animate='after'
        >
            {
                string.map((item, i) => (
                    <motion.div
                        style={{
                            fontSize: 50,
                            marginTop: 50
                        }}
                        key={`item${i}`}
                        variants={textVariant}
                    >
                        {item === ' ' ? '\u00A0' : item}
                    </motion.div>
                ))
            }
        </motion.div >
    )
}