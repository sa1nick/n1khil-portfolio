/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Heading from "../Heading";
import PText from "../PText";
import {motion} from "framer-motion";
import {client, urlFor} from "../../client"
import {AppWrapper} from "../../wrapper/"

// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

function Skills() {
    const [frontendSkills,setFrontendSkills] = useState([]);
    const [backendSkills,setBackendSkills] = useState([]);
    const [tools,setTools] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
        const frontQuery = '*[_type == "frontend_skills"] | order(_createdAt asc)';
        const backQuery = '*[_type == "backend_skills"] | order(_createdAt asc)';
        const toolsQuery = '*[_type == "tools"] | order(_createdAt asc)';
        
        // Simulate loading with a delay (for demonstration purposes)
        // const delay = 2000; // 2 seconds

        client.fetch(frontQuery)
        .then((data) => {
            // Simulate data fetching with a delay
            setFrontendSkills(data);
        });

        client.fetch(backQuery)
        .then((data) =>{
            setBackendSkills(data);
            // console.log("backend",data);
        })

        client.fetch(toolsQuery)
        .then((data) =>{
            setTools(data);
            // console.log("backend",data);
        })
    },[])
    

    return (
        <>
        {/* <div className="flex flex-col items-center justify-center gap-0">
        </div>  */}
            <Heading type="primary">My <span>Skills</span></Heading>
                <div className="mt-6 flex w-full flex-wrap justify-center text-center">
                    <SkillField skills={frontendSkills} field = "Frontend" />
                    <SkillField skills={backendSkills} field = "Backend" />
                    <SkillField skills={tools} field = "Tools" />
                    {/* <div className="mt-[-6%] flex w-full justify-center">
                    </div> */}
                </div>
        </>
        
    )
}

export default AppWrapper(Skills,'skills');


function SkillField({skills,field}){
    
    return(
    <div className="mx-3 my-7 flex w-[300px] flex-col items-center justify-center self-baseline text-center">
        <Heading type="small">{field}</Heading>
            <motion.div
             className="mt-5 flex h-full flex-wrap items-center justify-center" style={{"WebkitBoxPack":"center"}}>
                {skills.map((skill) =>(
                 <motion.div 
                 whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }} key={skill.name} className="m-3 flex flex-col items-center justify-between self-baseline">
                    <div className={`flex h-12 w-12 flex-col items-center justify-center rounded-full mb-2`} style={{backgroundColor : skill.bgColor}}>
                        <img src={urlFor(skill.icon)} alt={skill.name} className="h-2/4 w-2/4"/>
                    </div>
                    <div className="flex w-16 flex-wrap justify-center">
                        <PText>{skill.name}</PText> 

                    </div>
                 </motion.div>
                ))}
            </motion.div>
    </div>
    )
}

