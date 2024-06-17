import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {client, urlFor} from "../../client" 

import {AppWrapper} from "../../wrapper/"
import Heading from "../Heading";

function Services() {
    // const services = [
    //     {
    //       title: "Front-End Development",
    //       description: "I am a frontend developer with a passion for building beautiful and functional web applications.",
    //       imgUrl: images.about01,
    //     },
    //     {
    //       title: "Back-End Development",
    //       description: "I am a backend developer with a passion for building beautiful and functional web applications.",
    //       imgUrl: images.about02,
    //     },
    //     {
    //       title: "React Development",
    //       description: "I am a react developer with a passion for building beautiful and functional web applications.",
    //       imgUrl: images.about03,
    //     },
    //     {
    //       title: "React Development",
    //       description: "I am a react developer with a passion for building beautiful and functional web applications.",
    //       imgUrl: images.about03,
    //     }
    //     // { title: 'Full Stack Web Development', description: 'I am a good web developer.', imgUrl: images.about03 },
    //       // { title: 'MERN Stack', description: 'I am a good web developer.', imgUrl: images.about04 }
    //   ];

    const [services,setServices] = useState([]);

    useEffect(() =>{
      const query = '*[_type == "abouts"]';
      
      client.fetch(query)
      .then((data) =>{
        setServices(data)
        console.log(data);
      })
    },[])

    return (
      <motion.div id="services"
       whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
       className="flex flex-col items-center justify-center text-white">
      <Heading type="primary">My <span>Services</span></Heading>

      <div className="mt-12 flex flex-wrap items-start justify-center">
        {services.map((service, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="m-8 flex w-[230px] flex-col items-start justify-center rounded-[15px] bg-[linear-gradient(294.57deg,_rgba(66,141,255,_0.4)_0%,_rgba(104,_164,_255,_0.4)_100%)] px-2 py-3 text-center [box-shadow:rgba(85,_152,_255,_0.24)_0px_12px_56px] max-sm:w-[350px] max-sm:px-4 max-sm:py-4"
            key={index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} className="h-[150px] w-full rounded-[15px] object-cover max-sm:h-[300px]" />
            <h2 className="mt-[20px] flex self-center text-center text-[1rem] font-black text-[#fff] max-sm:text-[1.5rem]">
              {service.title}
            </h2>
            <p className="text-left text-sm/[1.5] leading-normal text-[#C6CBD2] max-sm:text-lg" style={{ marginTop: 10 }} >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    )
}

export default AppWrapper(Services,'services');
// export default Services;
