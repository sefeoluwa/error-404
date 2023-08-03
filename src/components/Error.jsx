/* eslint-disable no-constant-condition */
import  Gummy  from "../assets/Gummy.png"
import { motion } from "framer-motion"
import { useSpring, animated } from 'react-spring';


const Error = () => {

    const pulsate = useSpring({
        to: [
          { transform: 'scale(1.1)' },
          { transform: 'scale(1)' },
        ],
        from: { transform: 'scale(1)' },
        config: { duration: 1500, loop: true },
      });

      
    return (
        <>
       <div className="main">
            <div className="text-side">
                    <motion.h1 
                    initial={{ y: -100 }} 
                     animate={{ y: 0 }}     
                    transition={{ duration: 1, type: 'spring', stiffness: 120, delay: 0.8 }}
                    className="oops"
                    >
                 OOPS!!!
                </motion.h1>
            
                <motion.h2 
                initial={{ y: -100 }} 
                animate={{ y: 0 }}     
                transition={{ duration: 1, type: 'spring', stiffness: 120, delay: 0.6 }}
                className="error"
                >
                    404 error
                </motion.h2>
                <motion.p 
                initial={{ y: -100 }} 
                animate={{ y: 0 }}     
                transition={{ duration: 1, type: 'spring', stiffness: 120, delay: 0.4 }}
                className="para"
                >
                    The page you are looking for cannot be found.
                </motion.p>
        
             <div className="btn">
                    <motion.button 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="button"
                    >
                        Back to home
                    </motion.button>
                </div>
         </div>

            <div className="image-side">
                <animated.img src={Gummy} alt="sad face cartoon" className="gummy" style={pulsate}/>
            </div>

       </div>
        </>
    )
}


export default Error