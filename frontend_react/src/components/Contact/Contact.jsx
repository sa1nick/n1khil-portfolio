import { FiGithub,FiLinkedin,FiInstagram} from "react-icons/fi"; 
import { useEffect, useState } from "react";
import { AppWrapper } from "../../wrapper";
import Heading from "../Heading";
import {motion} from "framer-motion"
import { client, urlFor } from "../../client";
import Input from "../../utils/Input";
import Button from "../Button";
import { db } from "../../../firebase";
import { addDoc,collection } from "firebase/firestore";
import { bouncy } from 'ldrs'



function Contact() {
    const[socials,setSocials] = useState([]);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[isLoading,setIsLoading] = useState(false);

    bouncy.register()

// Default values shown

   async function handleSubmit(e){
        e.preventDefault();
        
        try {
          setIsLoading(true)
            const docRef = await addDoc(collection(db, "contacts"), {
            //   name:name,    
            //   email:email,    
            //   message:message,
              name,
              email,
              message    
            });
            // console.log("Document written with ID: ", docRef.id);
            // alert("Form hase been submitted successfully");
            setName('');
            setEmail('');
            setMessage('');
          } catch (e) {
            console.error("Error adding document: ", e);
        }
        finally{
          setIsLoading(false)
        }
        
        
    }

    useEffect(() =>{
        const query = `*[_type == "socials"]`;

        client.fetch(query)
        .then((data) =>{
            setSocials(data)
            // console.log(data);
        })
    },[])

    const base = "w-full rounded-lg border-transparent px-1 py-3 outline-[#397ffd]";

    const styles = {
        input:base,
        textarea:base + " resize-none"
    }

    const socialStyles = "h-[35px] w-[35px] duration-200 hover:scale-[1.16] max-sm:w-[40px] max-sm:h-[40px]"
    return (
        <>
            {isLoading ? <><div className="absolute z-20 flex h-full w-full items-center justify-center bg-[#ffffff34]"> <l-bouncy size="48" speed="1.75" color="#397ffd" /></div></> :  (<>
              <Heading type="primary"><span>Get In Touch</span></Heading>

         <form className="mt-8 flex w-4/5 items-end justify-center px-3 py-7 max-sm:w-full max-sm:flex-col-reverse max-sm:gap-16" onSubmit={handleSubmit}>
         <motion.div className="flex w-3/5 flex-col max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center"  
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}>
            <div className="mb-4 flex w-max flex-col items-start justify-center gap-10 max-sm:flex-row ">
               {/* {socials.map((social,index) =>(
                <a href={social.url} key={index} className="h-1/12 w-1/12 duration-200 hover:scale-[1.16]"><img src={urlFor(social.icon)} alt={social.name} className="h-full w-full invert"  /></a>
               ))} */}
               <a href="https://github.com/sa1nick"  className={socialStyles}><FiGithub className="h-full w-full" /></a>
               <a href="https://www.linkedin.com/in/sa1ni-nikhil/"  className={socialStyles}><FiLinkedin className="h-full w-full" /></a>
               <a href="https://www.instagram.com"  className={socialStyles}><FiInstagram className="h-full w-full" /></a>
            </div>
          </motion.div>
          <div className="flex w-full flex-col items-center justify-center gap-12 ">
          {/* <input type='text' name="name" id="" className={styles['input']} value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='email' name="email" id="" className={styles['input']} value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="" id="" cols="60" rows="6" className={styles['textarea']} value={message} onChange={(e) => setMessage(e.target.value)}></textarea> */}

            <Input label="What is your name?" type="text" styleType="input" value={name} onSet={setName} />
            <Input label="What is your email?" type="email" styleType="input" value={email} onSet={setEmail}/>
            <Input label="What is your message?" type="textarea" styleType="textarea" value={message} onSet={setMessage}/>
            <div className="flex justify-end  w-full"><Button type="submit">Submit</Button></div>
          </div>
            {/* <button type="submit">Sumit</button> */}
         </form>
            </>)}
        </>
    )
}

export default AppWrapper(Contact,'contact');