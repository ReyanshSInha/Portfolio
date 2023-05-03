import classes from "./BlogCard.module.css"
import {motion} from "framer-motion"



const BlogCard = (props) => {

    const cardClickHandler = (key) => {
        props.cardDataCollector(key)
    }

    return <>
        <motion.div onClick={() => {cardClickHandler(props.number)}} initial={{opacity: 0, x: -20}} whileTap={{scale: 0.8}} whileInView={{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.3 + props.delay}}} className={`${classes.BlogCard} ${classes.Laptop}`}>
            <div className={classes.BlogCardImage}></div>
            <div className={classes.BlogCardTitle}>{props.title}</div>
            {/* <div className={classes.BlogCardSubTitle}></div> */}
        </motion.div>
        <motion.div onClick={() => {cardClickHandler(props.number)}} initial={{opacity: 0, x: -20}} whileTap={{scale: 0.8}} whileInView={{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.3}}} className={`${classes.BlogCard} ${classes.Mobile}`}>
            <div className={classes.BlogCardImage}></div>
            <div className={classes.BlogCardTitle}>{props.title}</div>
            {/* <div className={classes.BlogCardSubTitle}></div> */}
        </motion.div> 
    </>
}

export default BlogCard