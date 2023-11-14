import Heading from "../Heading"
import { useEffect, useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from "./ExperienceCard";
import { client } from "../../client";
import styled from "styled-components"
import { motion } from "framer-motion";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;


const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;




function Experiences() {
const[experiences,setExperiences] = useState([]);
  
  useEffect(() =>{
    const query = '*[_type == "jobExperiences"] | order(_createdAt desc)';

    client.fetch(query)
    .then((data) =>{
      setExperiences(data);
      console.log(data);
    })

  },[])
  
    return (
      <motion.div       
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}>
      <Container id="experience">
      <Wrapper>
          <Heading type="primary">My <span>Experience</span></Heading>
          <motion.div 
            whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 1 }}
          >
                <TimelineSection>
                    <Timeline>
            {experiences.map((experience,index) => (
                <TimelineItem key={index} >
                <TimelineSeparator>
                {index !== experiences.length  && 
                <>
                <TimelineDot variant="outlined" color="primary" style={{backgroundColor:"#fff"}}  />
                    <TimelineConnector style={{ backgroundColor: '#289df2',}} />
                </>
                    }
                </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    
                    <ExperienceCard experience={experience} />
                    </TimelineContent>
                </TimelineItem>
                ))}
        </Timeline>

                </TimelineSection>
          </motion.div>          
      </Wrapper>
  </Container>
  </motion.div>
    )
}

export default Experiences
