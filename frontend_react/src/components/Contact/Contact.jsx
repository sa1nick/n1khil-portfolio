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
          setIsLoading(true)
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

    const base = "w-full rounded-lg border-transparent bg-[#171e2c] px-1 py-3 outline-[#397ffd]";

    const styles = {
        input:base,
        textarea:base + " resize-none"
    }
    return (
        <>
            {isLoading ? <><div className="absolute z-20 flex h-full w-full items-center justify-center bg-[#ffffff34]"> <l-bouncy size="48" speed="1.75" color="#397ffd" /></div></> :  (<>
              <Heading type="primary"><span>Get In Touch</span></Heading>

         <form className="mt-8 flex w-4/5 items-end justify-center px-3 py-7" onSubmit={handleSubmit}>
         <motion.div className="flex w-3/5 flex-col"  
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}>
            <div className="mb-4 flex flex-col items-center justify-center gap-10">
               {socials.map((social,index) =>(
                <a href={social.url} key={index}><img src={urlFor(social.icon)} alt={social.name} className="h-1/12 w-1/12 invert" /></a>
               ))}
            </div>
          </motion.div>
          <div className="flex w-full flex-col items-center justify-center gap-7">
          {/* <input type='text' name="name" id="" className={styles['input']} value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='email' name="email" id="" className={styles['input']} value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="" id="" cols="60" rows="6" className={styles['textarea']} value={message} onChange={(e) => setMessage(e.target.value)}></textarea> */}

            <Input label="What is your name?" type="text" styleType="input" value={name} onSet={setName} />
            <Input label="What is your email?" type="email" styleType="input" value={email} onSet={setEmail}/>
            <Input label="What is your message?" type="textarea" styleType="textarea" value={message} onSet={setMessage}/>
            <Button type="submit">Submit</Button>
          </div>
            {/* <button type="submit">Sumit</button> */}
         </form>
            </>)}
        </>
    )
}

export default AppWrapper(Contact,'contact');