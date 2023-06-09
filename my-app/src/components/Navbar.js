import { useState } from "react";
import classes from "./Navbar.module.css"
import { FiAlignJustify } from "react-icons/fi";
import { motion } from "framer-motion"
import { FiEdit } from "react-icons/fi";
import { IoIosChatbubbles } from "react-icons/io";
import { FaFileCode } from "react-icons/fa";
import { TiArrowMinimise, } from "react-icons/ti";
import { Link } from "react-router-dom";





const Navbar = () => {

    const [burgerMenu, setBurgerMenu] = useState(false)

    const burgerMenuHandler = () => {
        setBurgerMenu(prevState => !prevState)
        console.log(burgerMenu)
    }

    const hamVariants = {
        initial: { y: 100, height: 0 },
        animate: { y: 0, height: "450px", transition: { duration: 0.5 } },
        exit: { y: 100, height: 0, transition: { duration: 0.4, delay: 0.3 } }
    }

    const portfolioVariants = {
        initial: { x: -400, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.6 } },
        exit: { x: 400, transition: { duration: 0.2 } }
    }

    const blogVariants = {
        initial: { x: -400, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
        exit: { x: 400, transition: { duration: 0.3 } }
    }

    const connectVariants = {
        initial: { x: -400, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.6 } },
        exit: { x: 400, transition: { duration: 1 } }
    }


    return <>
        <div className={classes.Navbar}>
            <Link to="/"><div className={classes.Logo}>Reyansh</div></Link>

            <div className={classes.Menu}>
                <div className={classes.Sections}>
                    <Link to="/portfolio"><div className={classes.Portfolio}>Portfolio</div></Link>
                    <Link to="/blog"><div className={classes.Blog}>Blog</div></Link>
                    <Link to="/connect"><div className={classes.Connect}>Connect</div></Link>
                </div>
            </div>
            <div className={classes.HamburgerIcon} onClick={burgerMenuHandler} > {burgerMenu ? <TiArrowMinimise color="beige" size="50px" /> : <FiAlignJustify color="beige" size="50px" />} </div>

        </div>
        {<motion.div variants={hamVariants} initial="initial" animate={burgerMenu ? "animate" : "exit"} className={classes.HamburgerMenu}>
            <div className={classes.BurgerSections}>
                <Link to="/portfolio"><motion.div variants={portfolioVariants} initial="initial" animate={burgerMenu ? "animate" : "exit"} className={classes.BurgerPortfolio}> <FaFileCode size="2rem" /> Portfolio</motion.div>
                </Link>
                <Link to="/blog"><motion.div variants={blogVariants} initial="initial" animate={burgerMenu ? "animate" : "exit"} className={classes.BurgerBlog}> <FiEdit size="2rem" /> Blog</motion.div>
                </Link>
                <Link to="/connect"><motion.div variants={connectVariants} initial="initial" animate={burgerMenu ? "animate" : "exit"} className={classes.BurgerConnect}> <IoIosChatbubbles size="" /> Connect</motion.div>
                </Link>
            </div>
        </motion.div>}
    </>
}

export default Navbar