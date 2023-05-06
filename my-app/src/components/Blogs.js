import BlogCard from "./BlogCard"
import classes from "./Blogs.module.css"
import BlogData from "./BlogData"
import Content from "./Content" 

import { useState } from "react"

const Blogs = () => {

    const [contentState, setContentState] = useState(false)
    const [contentKey, setContentKey] = useState(-1)

    const blogCardDataCollector = (key) => {
        console.log("got the key: " + key)
        setContentKey(key)
        setContentState(true)
    }

    const contentCardDataCollector = (Data) => {
        console.log(Data)
        setContentState(false)
    }

   

    return (
        <>
            {contentState &&<Content contentDataCollector={contentCardDataCollector} number={contentKey}/>}
            <div className={classes.BlogList}>
                {BlogData.map((BlogItem) => {
                    return <BlogCard cardDataCollector={blogCardDataCollector} key={BlogItem.key - 1} date={BlogItem.date} number={BlogItem.key} delay={BlogItem.delay} duration={BlogItem.duration} title={BlogItem.title} image={BlogItem.image}/>
                })}
            </div> 
        </>
    )
}

export default Blogs