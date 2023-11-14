import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
import Heading from "../Heading";

const abouts = [
  {
    title: "Front-End Development",
    description: "I am a good web developer.",
    imgUrl: images.about01,
  },
  {
    title: "Back-End Development",
    description: "I am a good web developer.",
    imgUrl: images.about02,
  },
  // { title: 'Full Stack Web Development', description: 'I am a good web developer.', imgUrl: images.about03 },
  // { title: 'MERN Stack', description: 'I am a good web developer.', imgUrl: images.about04 }
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <Heading type="primary">My <span>Services</span></Heading>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
