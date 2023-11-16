import React from 'react'
import { motion } from 'framer-motion'

const RevealEffect: React.FC<React.PropsWithChildren>= ({children}) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },

        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            width: "auto",
            height: "auto"
        }
    }
    
    const transition = {
        duration: 0.25,
        delay: 0,
    }
    
    return (
        <>
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={transition}
            viewport={{once:true}}
            >
                {children}
            </motion.div>
        </>
    )
}

export default RevealEffect