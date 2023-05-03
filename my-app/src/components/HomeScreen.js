import Hero from "./Hero"
import classes from "./HomeScreen.module.css"
import Navbar from "./Navbar"

const HomeScreen = () => {
    return <div  className={classes.HomeScreen}>
        <Navbar/>
        <Hero/>
    </div>
}

export default HomeScreen