import { AnimatePresence } from "framer-motion"
import HomeScreen from "../components/HomeScreen"
import SplashScreen from "../components/SplashScreen"

const HomePage = () => {
    return <>
        <AnimatePresence initial={true}>
        <SplashScreen/>
        </AnimatePresence>
        
        <HomeScreen/>
    </>
}

export default HomePage