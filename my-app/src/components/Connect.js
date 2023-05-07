import { useState } from "react"
import classes from "./Connect.module.css"
import { motion } from "framer-motion"
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"; 


const connectionRequestCollectionRef = collection(db, "ConnectionRequests")
 
const Connect = () => {

    const [animationState, setAnimatinState] = useState(true)
    const [animationStateTwo, setAnimatinStateTwo] = useState(true)
    const [animationStateThree, setAnimatinStateThree] = useState(true)
    const [mobileAnimationOne, setMobileAnimationOne] = useState(true)
    const [mobileAnimationTwo, setMobileAnimationTwo] = useState(true)
    const [mobileAnimationThree, setMobileAnimationThree] = useState(true)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [known, setKnown] = useState('')
    const [why, setWhy] = useState('')
    const [userData, setUserData] = useState({})
    const [inputValue, setInputValue] = useState('')

    const connectTextVariants = {
        initial: {
            opacity: 0,
            x: 200,
            display: "none",
            // scale: 0
        },

        animate: {
            opacity: 1,
            x: 0,
            display: "flex",
            // scale: 1,
            transition: {
                duration: 0.5,
            }
        },

        exit: {
            opacity: 0,
            x: 0,
            // scale: 0,
            display: "flex",
            transition: {
                duration: 0.3,
                delay: 0.9
            }
        }
    }

    const connectTextTwoVariants = {
        initial: {
            opacity: 0,
            x: 200,
            // scale: 0,
            display: "none",
        },

        animate: {
            opacity: 1,
            x: 0,
            // scale: 1,
            display: "flex",
            transition: {
                duration: 0.5,
                delay: 1.8,
            }
        },

        exit: {
            opacity: 0,
            x: 0,
            display: "flex",
            // scale: 0,
            transition: {
                duration: 0.3,
                delay: 0.9
            }
        }
    }

    const connectTextThreeVariants = {
        initial: {
            opacity: 0,
            x: 200,
            // scale: 1,
            display: "none",
        },

        animate: {
            opacity: 1,
            x: 0,
            // scale: 1,
            display: "flex",
            transition: {
                duration: 0.5,
                delay: 3.6,
            }
        },

        exit: {
            opacity: 0,
            x: 0,
            // scale: 0,
            display: "flex",
            transition: {
                duration: 0.3,
                delay: 0.9
            }
        }
    }

    const LetsConnectVariants = {
        initial: {
            opacity: 0,
            y: 200,

        },

        animate: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.7,
                delay: 5.4
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
                delay: 5.7
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
                delay: 6
            }
        }
    }

    const formVariants = {
        initial: {
            opacity: 0,

            display: "none",
            // scale: 0,
            x: 200
        },

        animate: {
            opacity: 1,

            x: 0,
            display: "flex",
            // scale: 1,
            transition: {
                duration: 0.4,
                delay: 6.2
            }
        }
    }


    const animationEndHandler = () => [
        setAnimatinState(false)
    ]

    const animationEndHandlerTwo = () => [
        setAnimatinStateTwo(false)
    ]

    const animationEndHandlerThree = () => [
        setAnimatinStateThree(false)
    ]

    const mobileAnimationOneVariants = {
        initial: {
            opacity: 0,
            // x: -200,
            
        },

        animate: {
            opacity: 1,
            x: 0,
            
            transition: {
                duration: 0.5,
            
            }
        },

        exit: {
            opacity: 0,
            // x: 200,
            scale: 0,
            transition: {
                duration: 0.5,
                delay: 0.9
            }
        }
    }

    const mobileAnimationTwoVariants = {
        initial: {
            opacity: 0,
            // x: -200,
            
        },

        animate: {
            opacity: 1,
            x: 0,
            
            transition: {
                duration: 0.5,
                delay: 1.8,
            }
        },

        exit: {
            opacity: 0,
            // x: 200,
            scale:0,
            transition: {
                duration: 0.5,
                delay: 0.9,
            }
        }
    }

    const mobileAnimationThreeVariants = {
        initial: {
            opacity: 0,
            y: -200,
            
        },

        animate: {
            opacity: 1,
            y: 0,
            
            transition: {
                duration: 0.5,
                delay: 3.6
            }
        },

        exit: {
            opacity: 0,
            y: -200,
            
            transition: {
                duration: 0.9,
                delay: 0.9,
            }
        }
    }

    const MobileLetsConnectVariants = {
        initial: {
            y: 200,
            opacity: 0
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 5.4
            }
        }
    }

    const MobileFormVariants = {
        initial: {
            opacity: 0,
            y: 200
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 6
            }
        }
    }

    const MobileAnimationOneCompleteHandler = () => {
        setMobileAnimationOne(false)
    }

    const MobileAnimationTwoCompleteHandler = () => {
        setMobileAnimationTwo(false)
    }

    const MobileAnimationThreeCompleteHandler = () => {
        setMobileAnimationThree(false)
    }

    const nameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const emailChnageHandler = (event) => {
        setEmail(event.target.value)
        
    }

    const knownChangeHandler = (event) => {
        setKnown(event.target.value)
    }

    const whyChangeHandler = (event) => {
        setWhy(event.target.value)
    }

    const btnClickHandler = async (event) => {
        event.preventDefault()
        if(userName == ''){
            toast.error("Enter a valid User Name!!!", {
                position: "bottom-center",
                hideProgressBar: "true"
            })
        }else if(email == ''){
            toast.error("Enter a valid email id!!!", {
                position: "bottom-center",
                hideProgressBar: "true"
            })
        }else if(!email.includes('@')){
            toast.error("Enter a valid email id!!!", {
                position: "bottom-center",
                hideProgressBar: "true"
            })
        }else if(why == ''){
            toast.error("Enter a valid reason to connect!!!", {
                position: "bottom-center",
                hideProgressBar: "true"
            })
        }else{
           try{
                await addDoc(connectionRequestCollectionRef, {UserName: userName, Email: email, Known: known, Why: why})
                toast.success('Connection Request Sent!!', {
                    position: "bottom-center",
                    // marginTop: "200px"
                    hideProgressBar: "true",
                    autoClose: 1000,
                });
           }catch(err){
                console.log(err)
           }

        }
        
        
        setUserName('')
        setEmail('')
        setKnown('')
        setWhy('')
    }

    return (
        <>
            <div className={classes.Parent}>
                <div className={classes.Connect}>
                    <motion.div variants={connectTextVariants} initial="initial" animate={animationState ? "animate" : "exit"} onAnimationComplete={animationEndHandler} className={classes.ConnectTextOne}>Got a startup idea? <br /> and need a developer?</motion.div>
                    <motion.div variants={connectTextTwoVariants} initial="initial" animate={animationStateTwo ? "animate" : "exit"} onAnimationComplete={animationEndHandlerTwo} className={classes.ConnectTextTwo}>Need a reliable partner for hackathons?</motion.div>
                    <motion.div variants={connectTextThreeVariants} initial="initial" animate={animationStateThree ? "animate" : "exit"} onAnimationComplete={animationEndHandlerThree} className={classes.ConnectTextThree}>Or just wanna talk about life?</motion.div>
                    <motion.div variants={LetsConnectVariants} initial="initial" animate="animate" className={classes.LetsConnect}>Let's Connect</motion.div>
                    <div className={classes.IconSection}>
                        <motion.span variants={iconOneVariants} initial="initial" animate="animate" className={classes.IconOne}><a target="_blank" href="https://www.linkedin.com/in/reyansh-sinha/"><GrLinkedin size="3rem" color="skyblue" /></a></motion.span>
                        <motion.span variants={iconTwoVariants} initial="initial" animate="animate" className={classes.IconTwo}><a target="_blank" href="https://github.com/ReyanshSInha"><GrGithub size="3rem" color="lavender" /></a></motion.span>
                    </div>
                    {/* <div className={classes.formCard}> */}
                    <motion.form className={classes.Laptop} variants={formVariants} initial="initial" animate="animate">
                        <input value={userName} onChange={nameChangeHandler} type="text" placeholder="Enter Your Name" className={classes.InputName}></input>
                        <input value={email} onChange={emailChnageHandler} type="email" placeholder="Enter Your Email" className={classes.InputEmail}></input>
                        <input value={known} onChange={knownChangeHandler} type="text" placeholder="Do you know me IRL? How?" className={classes.InputKnown}></input>
                        <textarea value={why} onChange={whyChangeHandler} placeholder="Why do you want to connect?" className={classes.InputWhy}></textarea>
                        <button onClick={btnClickHandler} type="submit" className={classes.Btn}>Done!</button>

                    </motion.form>
                </div>

                {/* </div> */}
            </div>
            <div className={classes.ParentMobile}>
                <motion.div variants={mobileAnimationOneVariants} initial="initial" animate={mobileAnimationOne ? "animate" : "exit"} onAnimationComplete={MobileAnimationOneCompleteHandler} className={classes.MobileAnimation}>Got a startup idea? <br /> and need a developer?</motion.div>
                <motion.div variants={mobileAnimationTwoVariants} initial="initial" animate={mobileAnimationTwo? "animate" : "exit"} onAnimationComplete={MobileAnimationTwoCompleteHandler} className={classes.MobileAnimation}>Need a reliable partner for hackathons?</motion.div>
                <motion.div variants={mobileAnimationThreeVariants} initial="initial" animate={mobileAnimationThree? "animate": "exit"} onAnimationComplete={MobileAnimationThreeCompleteHandler} className={classes.MobileAnimation}>Or just wanna talk about life?</motion.div>
                <motion.div variants={MobileLetsConnectVariants} initial="initial" animate="animate" className={classes.letsConnectMobile}>Let's Connect</motion.div>
                <div className={classes.IconSectionMobile}>
                        <motion.span variants={iconOneVariants} initial="initial" animate="animate" className={classes.IconOneMobile}><a href="https://www.linkedin.com/in/reyansh-sinha/" target="_blank"><GrLinkedin size="3rem" color="skyblue" /></a></motion.span>
                        <motion.span variants={iconTwoVariants} initial="initial" animate="animate" className={classes}><a href="https://github.com/ReyanshSInha" target="_blank"><GrGithub size="3rem" color="lavender" /></a></motion.span>
                </div>
                <motion.form variants={MobileFormVariants} initial="initial" animate="animate"  className={classes.formMobile}>
                        <input value={userName} onChange={nameChangeHandler} type="text" placeholder="Enter Your Name" className={classes.InputNameMobile}></input>
                        <input value={email} onChange={emailChnageHandler} type="email" placeholder="Enter Your Email" className={classes.InputEmailMobile}></input>
                        <input value={known} onChange={knownChangeHandler} type="text" placeholder="Do you know me IRL? How?" className={classes.InputKnownMobile}></input>
                        <textarea value={why} onChange={whyChangeHandler} placeholder="Why do you want to connect?" className={classes.InputWhyMobile}></textarea>
                        <button onClick={btnClickHandler} type="submit" className={classes.BtnMobile}>Done!</button>
                </motion.form>
            </div>


               
            
        </>
    )
}

export default Connect