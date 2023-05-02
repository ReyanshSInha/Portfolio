import classes from "./Navbar.module.css"

const Navbar = () => {
    return <div className={classes.Navbar}>

        <div className={classes.Logo}>Reyansh</div>
        <div className={classes.Menu}>
            <div className={classes.Sections}>
                <div className={classes.Portfolio}>Portfolio</div>
                <div className={classes.Blog}>Blog</div>
                <div className={classes.Connect}>Connect</div>
            </div>
        </div>
        <div className={classes.HamburgerIcon}></div>
        <div className={classes.HamburgerMenu}>
            <div className={classes.Sections}>
                <div className={classes.Portfolio}>Portfolio</div>
                <div className={classes.Blog}>Blog</div>
                <div className={classes.Connect}>Connect</div>
            </div>
        </div>
    </div>
}

export default Navbar