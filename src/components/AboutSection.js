import React from 'react'
import home1 from '../img/home1.png'
import { About, Description, Hide, Image } from '../styles';

// import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
// import Wave from './Wave';

const AboutSection = () => {


    const titleAnim ={
        hidden: {opacity: 0},
        show:{opacity:1, transition: {duration:2}  }
    };

    const container ={
        hidden: { x:100 },
        show:{ x: 0, transition:{duration: 0.75, ease: 'easeout'} },
    }
    return(
    <About>
        <Description>
        <div className="title">
            <Hide>
                <motion.h2 variants={titleAnim} initial="hidden" animate="show">
                We work to make
                </motion.h2>
            </Hide>
            <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
            </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};






export default AboutSection;