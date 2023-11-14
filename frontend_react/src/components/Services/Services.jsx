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
            className="m-8 flex w-[220px] flex-col items-start justify-center"
            key={index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} className="h-[180px] w-full rounded-[15px] object-cover" />
            <h2 className="mt-[20px] text-center text-[1rem] font-extrabold text-[#030303]">
              {service.title}
            </h2>
            <p className="text-left text-sm/[1.5] leading-normal text-[#C6CBD2]" style={{ marginTop: 10 }}>
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
