import classes from "./Hero.module.css"
import { delay, motion } from "framer-motion"
import image1 from "../assets/HeroImage.jpg"
import image2 from "../assets/HeroImageTwo.jpeg"
import { useState, useEffect } from "react";

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
            delay: 1

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
            delay: 1

        }
    }
}



const Data = [
    { Image: image1,color:"orange", title: "Who Am I?", text: "adf adf a dfa d fafa s" },
    { Image: image1,color:"orange", title: "Why this website", text: "adf aadfadfadfafdf a dfa d fafa s" },
    { Image: image1,color: "orange", title: "My Interests", text: "vnxcvm,nzc, adf adf a dfa d fafa s" }
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

    return  <motion.div
        style={{ backgroundColor: Data[index].color} }
        className={classes.Hero}>
        <motion.div style={{ pointerEvents: "auto" }} className={classes.AnimationSection}>
            <motion.h3 className={classes.HeroText} key={index} variants={titleVariants} initial="hidden" whileInView="visible" onAnimationComplete={animationCompleteHandler} animate={ isComplete ? "exit" : ""} >{Data[index].title}</motion.h3>
            <motion.p className={classes.HeroSubText} key={index + 100} variants={textVariants} initial="hidden" whileInView="visible" >
                {Data[index].text}
            </motion.p>
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
                animate={{ borderRadius: "45%",  transition: { duration: 1 } }}
                className={classes.HeroImage} width="400px" src={Data[index].Image} />
        </div>


    </motion.div>
}

export default Hero