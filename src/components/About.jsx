import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly irems-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center"  >{title}</h3>



        </div>
      </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction...</p>
        <h2 className={styles.heroHeadText}>Overview...</h2>
      </motion.div>

      <motion.p variants={fadeIn("", 0.1, 1)} className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
        Hi, I'm James Khadka
        I'm a dedicated student currently pursuing my BSc CSIT at Shreeyantra College, an IOST-certified institution in Damak. With a passion for web development, I'm diving into the world of React and Tailwind CSS, eager to build sleek and responsive web applications. As I embark on this journey, I'm excited to learn, create, and share my growing expertise with the world.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");