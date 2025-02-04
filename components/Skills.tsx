import React from 'react'
import BallCanvas from './Ball'


export const skills=[
    {
        id:"HTML 5",
        icon:"/icons/html.png"
    },
    {
        id:"CSS 3",
        icon:"/icons/css.png"
    }
]

function Skills() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-44'>
        <h1 className='text-4xl font-bold'>Skills</h1>
        {
            skills.map((skill,idx)=>(
                <div key ={skill.id+idx} className='w-28 h-28'>
                    <BallCanvas icon={skill.icon} />
                </div>
            ))
        }
    </div>
  )
}

export default Skills