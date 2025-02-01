'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react'

export type NavItemProp={
    label:string;
    link:string;
}

function NavItem({item}:{item:NavItemProp}) {
    const [hovered,setHovered] = useState(false)
  return (
    <div className='flex flex-col'>
        
        <motion.a
         onHoverStart={()=>setHovered(true)} 
         onHoverEnd={()=>setHovered(false)} 
         initial={{y:0}} 
         whileHover={{y:-2}} 
         transition={{type:"tween",duration:"0.1", ease:"easeInOut"}} 
         href={item.link} className=" font-normal text-lg">
            {item.label}
            {
                hovered && <motion.div initial={{opacity:0, scale:0.2}} animate={{ opacity: 1, scale: 1 }} exit={{opacity:0, scale:0}}
                transition={{ duration: 0.3 }} className='w-[11px] h-[11px] rounded-full self-center justify-self-center bg-secondary text-8xl font-bold'></motion.div>
            }
        </motion.a>
        
    </div>
  )
}

export default NavItem