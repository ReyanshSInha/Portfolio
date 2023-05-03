import classes from "./Content.module.css"
import BlogData from "./BlogData";
import { animate, motion } from "framer-motion"
import { useState } from "react";
import { MdDangerous } from "react-icons/md";



const Content = (props) => {

    const backgroundCLickHandler = (Data) => {
        setContentState(false)
        props.contentDataCollector(Data)
    }

    const [contentState, setContentState] = useState(true)

    const contentVariants = {
        initial: {
            opacity: 0,
            y: 500,
            transform: {
                translateX: "-50%",
            },
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
            }
        },

        exit: {
            opacity: 0,
            y: 500,
            transition: {
                duration: 0.5,
            },
            transform: {
                translateX: "0%",
            },
        }
    }

    return <>
        <motion.div variants={contentVariants} initial="initial" animate={contentState ? "animate" : "exit"} onClick={() => { backgroundCLickHandler("closed") }} className={classes.ContentBackground}>
        </motion.div>
        <motion.div variants={contentVariants} initial="initial" animate={contentState ? "animate" : "exit"} className={classes.ContentCard}>
            
            <div className={classes.MainContent}>
                <h1>{BlogData[props.number - 1].title}</h1>
            </div>
            <div className={classes.Cross}><MdDangerous onClick={() => { backgroundCLickHandler("closed") }} size="4rem" /></div>
        </motion.div>
    </>
}

export default Content;