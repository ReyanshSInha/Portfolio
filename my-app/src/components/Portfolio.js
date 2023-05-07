import {motion} from "framer-motion"
import classes from "./Portfolio.module.css"
import { useState } from "react"

const firstVariant = {
    initial: {
        opacity: 0,
        x: 200,
        display: "none",
        // scale: 0
    },

    animate: {
        opacity: 1,
        x: 0,
        display: "flex",
        // scale: 1,
        transition: {
            duration: 0.5,
        }
    },

    exit: {
        opacity: 0,
        x: 0,
        // scale: 0,
        display: "flex",
        transition: {
            duration: 0.5,
            delay: 1.3
        }
    }
}

const secondVariant = {
    initial: {
        opacity: 0,
        x: 200,
        display: "none",
        // scale: 0
    },

    animate: {
        opacity: 1,
        x: 0,
        display: "flex",
        // scale: 1,
        transition: {
            duration: 0.5,
            delay: 2.3
        }
    },

    exit: {
        opacity: 0,
        x: 0,
        // scale: 0,
        display: "flex",
        transition: {
            duration: 0.5,
            delay: 1.3
        }
    }
}

const thirdVariant = {
    initial: {
        opacity: 0,
        x: 200,
        display: "none",
        // scale: 0
    },

    animate: {
        opacity: 1,
        x: 0,
        display: "flex",
        // scale: 1,
        transition: {
            duration: 0.5,
            delay: 4.8
        }
    },

}

const Portfolio = () => {

    const [firstAnimation, setFirstAnimation] = useState(true)
    const [secondAnimation, setSecondAnimation] = useState(true)
    
    const firstAnimationCompleteHandler = () => {
        setFirstAnimation(false)
    }

    const secondAnimationCompleteHandler = () => {
        setSecondAnimation(false)
    }
    
    return <div className={classes.Portfolio}>
        <motion.div variants={firstVariant} initial="initial" animate={firstAnimation ? "animate" : "exit"} onAnimationComplete={firstAnimationCompleteHandler}>sshhhh....</motion.div>
        <motion.div variants={secondVariant} initial="initial" animate={secondAnimation ? "animate" : "exit"} onAnimationComplete={secondAnimationCompleteHandler}>It's Under Construction</motion.div>
        <motion.div variants={thirdVariant} initial="initial" animate="animate">It may take a while, <br/>Please visit other Sections</motion.div>
    </div>
}

export default Portfolio