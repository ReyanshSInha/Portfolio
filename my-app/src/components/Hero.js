import classes from "./Hero.module.css"
import { AnimatePresence, animate, delay, motion } from "framer-motion"
import image1 from "../assets/HeroImage.jpg"
import image2 from "../assets/HeroImageTwo.jpeg"
import { useState, useEffect } from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";


const titleVariants = {
    hidden: {
        opacity: 0,
        // x: "-200px",
        scale: 0
    },

    visible: {
        opacity: 1,
        // x: "0",
        scale: 1,

        transition: {
            duration: 0.5,
            delay: 0.2
        }
    },

    exit: {
        opacity: 0,
        x: -600,
        transition: {
            duration: 0.5,
            // delay: 1

        }
    }


}


const textVariants = {
    hidden: {
        opacity: 0,
        // x: "-200px",
        x: 200
    },

    visible: {
        opacity: 1,
        // x: "0",
        x: 0,

        transition: {
            duration: 0.5,
            delay: 0.9
        }
    },

    exit: {
        opacity: 0,
        x: -400,
        transition: {
            duration: 0.5,
        

        }
    }
}

const iconOneVariants = {
    initial: {
        y: 400,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 3.5
        }
    }
}

const iconTwoVariants = {
    initial: {
        y: 400,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.6,
            delay: 3.7
        }
    }
}



const Data = [
    { Image: image1, color: "#191970", title: "Who Am I?", text: "adf adf a dfa d fafa s" },
    { Image: image1, color: "#191970", title: "Why this website", text: "adf aadfadfadfafdf a dfa d fafa s" },
    { Image: image1, color: "#191970", title: "My Interests", text: "vnxcvm,nzc, adf adf a dfa d fafa s" }
]



const Hero = () => {

    const [index, setIndex] = useState(0)

    const clickHandler = () => {
        console.log(index)
        if (index === 2) {
            setIndex(0)
        } else {
            setIndex((prevIndex) => {
                return prevIndex + 1
            })
        }
        // event.stopPropagation()
    }

    useEffect(() => {
        const indexHandler = setInterval(() => {
            clickHandler()
        }, 4000)

        return () => clearInterval(indexHandler)
    }, [index])

    const [isComplete, setIsComplete] = useState(false)
    const [textIsComplete, setTextIsComplete] = useState(false)
    const [done, setDone] = useState(true)

    const animationCompleteHandler = () => {
        setDone()
    }

    const textWriteHandler = () => {
        setTextIsComplete(!textIsComplete)
    }

    return <motion.div
        style={{ backgroundColor: Data[index].color }}
        className={classes.Hero}>
        <motion.div style={{ pointerEvents: "auto" }} className={classes.AnimationSection}>
            <AnimatePresence>
                <motion.h3 className={classes.HeroText} key={index} variants={titleVariants} initial="hidden" whileInView="visible" onAnimationComplete={animationCompleteHandler} exit="exit" >{Data[index].title}</motion.h3>
                <motion.p className={classes.HeroSubText} key={index + 100} variants={textVariants} initial="hidden" animate="visible" exit="exit">
                    {Data[index].text}
                </motion.p>
            </AnimatePresence>
            <div className={classes.IconSection}>
                <motion.span variants={iconOneVariants} initial="initial" animate="animate" className={classes.IconOne}><a href="#"><GrLinkedin size="3rem" color="skyblue" /></a></motion.span>
                <motion.span variants={iconTwoVariants} initial="initial" animate="animate" className={classes.IconTwo}><a href="#"><GrGithub size="3rem" color="lavender" /></a></motion.span>
            </div>
            {/* <motion.div
                style={{ pointerEvents: "auto" }}

                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}

                onClick={clickHandler}
                className={classes.HeroButton}
                // variants={buttonVariants} 
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 5, duration: 1 } }}
            >Know Me More</motion.div> */}
        </motion.div>
        <div className={classes.ImageSection}>
            <motion.img
                key={index + 10}
                className={classes.HeroImage} width="400px" src={Data[index].Image} />
        </div>


    </motion.div>
}

export default Hero