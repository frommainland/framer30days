import React, { useState } from "react"
import { motion } from "framer-motion"

export default function PanButton() {
    const [degree, setdegree] = useState(0)

    function add45() {
        setdegree(degree + 45)
    }
    return (
        <motion.div style={{
            height: 200,
            width: 200,
            background: 'yellow',
            borderRadius: 60,
            // textAlign: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            animate={{ rotate: degree }}
            onPan={
                (event, info) => setdegree(degree + info.delta.x)
            }
        >
            Pan {Math.round(degree)}
        </motion.div>
    )
}