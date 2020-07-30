import React from "react"
import { motion } from "framer-motion"



export default function TopReveal() {
    const items = ['Firstggg Line', 'Second Line', 'Third Line']

    const containerVariant = {
        before: {},
        after: {
            transition: {
                staggerChildren: 0.6,
            }
        }
    }
    const textVariant = {
        before: {
            y: -50 * 3,
            opacity: 0
        },
        after: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                yoyo: Infinity,
                repeatDelay: 1
            }
        }
    }

    const lineContainerVariant = {
        before: {},
        after: {}
    }

    const lineVariant = {
        before: {

        },
        after: {

        }
    }


    return (
        <motion.div
            style={{
                background: 'green',
                height: 50 * 3 + 100,
                width: 400,
                textAlign: 'center',
                display: 'inline-block'
            }}
            variants={containerVariant}
            initial='before'
            animate='after'
        >
            {
                items.map((item, i) => (
                    <div
                        style={{
                            overflow: 'hidden',
                        }}
                        key={item}
                    >
                        <motion.h1
                            style={{
                                fontSize: 50
                            }}
                            variants={textVariant}
                        >
                            {item}</motion.h1>
                    </div>
                ))
            }


        </motion.div >
    )
}