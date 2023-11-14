
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Heading from '../Heading';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { client, urlFor } from '../../client';
import {AppWrapper} from "../../wrapper"


const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      console.log(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };


    // const filterItem = "m-2 cursor-pointer rounded-lg bg-transparent border-2 border-[#397ffd] px-4 py-2 font-extrabold text-[#fff] [transition:all_0.3s_ease] hover:text-[#fff] [@media_screen_and(min-width:2000px)]:rounded-[0.85rem] [@media_screen_and(min-width:2000px)]:px-8 [@media_screen_and(min-width:2000px)]:py-4 flex items-center justify-center "
    // const pText = "text-[0.8rem] text-left leading-normal [@media_screen_and(min-width:2000px)]:text-[1.75rem]"
    
    const itemActive = "m-2 cursor-pointer rounded-lg border-2 border-[#397ffd] px-4 py-2 font-extrabold text-[#fff] [transition:all_0.3s_ease] hover:text-[#fff] [@media_screen_and(min-width:2000px)]:rounded-[0.85rem] [@media_screen_and(min-width:2000px)]:px-8 [@media_screen_and(min-width:2000px)]:py-4 flex items-center justify-center text-[0.8rem] text-left leading-normal [@media_screen_and(min-width:2000px)]:text-[1.75rem]";
     
    return (
       <div className="py-12">
       <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
        <Heading type="primary">My <span>Projects</span></Heading>
        <div className='mx-[0] mb-7 mt-8 flex flex-row flex-wrap items-center justify-center'>
        {[ 'React JS','JavaScript','Rest APIs', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className= {`${itemActive} ${activeFilter === item ? 'text-white bg-[#397ffd]' : 'bg-transparent'}`}
          >
            {item}
          </div>
        ))}
      </div>
    
    {/* <div className='flex items-center justify-center'> */}
      <motion.div 
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.7 }}
        className="flex w-[670px] flex-wrap items-center justify-center"
      >
        {filterWork.map((work, index) => (
          <div className="m-8 flex w-[270px] cursor-pointer flex-col items-center justify-center rounded-lg bg-[#365BB0] p-4 text-[#fff] transition-all duration-[0.3s] ease-linear hover:[box-shadow:0_0_25px_rgba(0,_0,_0,_0.2)] [@media_screen_and(min-width:2000px)]:w-[470px] [@media_screen_and(min-width:2000px)]:rounded-xl [@media_screen_and(min-width:2000px)]:p-5" key={index}>
            <div className="relative flex h-[210px] w-full items-center justify-center [@media_screen_and(min-width:2000px)]:h-[350px]">
              <img src={urlFor(work.imgUrl)} alt={work.name}  className='h-full w-full rounded-lg object-cover'/>

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="absolute bottom-[0] left-[0] right-[0] top-[0] flex h-full w-full items-center justify-center rounded-lg bg-[rgba(0,_0,_0,_0.5)] opacity-0 [transition:all_0.3s_ease]"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="m-4 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] bg-[rgba(0,_0,_0,_0.5)] font-extrabold text-[#fff] [transition:all_0.3s_ease]"
                  >
                    <AiFillEye className='h-1/2 w-1/2' />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="m-4 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] bg-[rgba(0,_0,_0,_0.5)] font-extrabold text-[#fff] [transition:all_0.3s_ease]"
                  >
                    <AiFillGithub className='h-1/2 w-1/2' />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center p-2">
              <h4 className="mt-4 text-left text-[1rem] font-extrabold leading-normal [@media_screen_and(max-width:450px)]:text-[0.9rem] [@media_screen_and(min-width:2000px)]:mt-12 [@media_screen_and(min-width:2000px)]:text-[2rem]">{work.title}</h4>
              <p className="text-left text-[0.8rem] leading-normal text-[#d7e5ff] [@media_screen_and(min-width:2000px)]:text-[1.75rem]" style={{ marginTop: 10 }}>
                {work.description.slice(0,96)+"..."}
              </p>

              <div className="absolute -top-[25px] flex items-center justify-center rounded-[10px] bg-[#365BB0] px-4 py-2">
                <p className="text-left text-[0.8rem] leading-normal text-[#b0ccfe] [@media_screen_and(min-width:2000px)]:text-[1.75rem]">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      </motion.div>
      </div>

      
      //  </div>
    ) 
}
export default AppWrapper(Work,'work');