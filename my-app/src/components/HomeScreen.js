import Hero from "./Hero"
import classes from "./HomeScreen.module.css"
import Navbar from "./Navbar"

const HomeScreen = () => {
    return <div style={{ pointerEvents: "auto" }} className={classes.HomeScreen}>
        <Navbar/>
        <Hero/>
    </div>
}

export default HomeScreen