import React from 'react'
import ExperienceTimeLine from './ExperienceTimeLine'


export const experiences = [
    {
        title:'Full Stack Developer',
        company_name:'Company Name',
        icon:'/icons/freelancer.png',
        iconBg:"white",
        date:"March 2021 - Present",
        points:[
            "Developed and maintained the company's website",
            "Collaborated with the team to develop new features",
            "Tested and debugged the website",
        ]
    },
    {
        title:'Full Stack Developer',
        company_name:'Company Name',
        icon:'/icons/freelancer.png',
        iconBg:"white",
        date:"March 2021 - Present",
        points:[
            "Developed and maintained the company's website",
            "Collaborated with the team to develop new features",
            "Tested and debugged the website",
        ]
    },
    {
        title:'Full Stack Developer',
        company_name:'Company Name',
        icon:'/icons/freelancer.png',
        iconBg:"white",
        date:"March 2021 - Present",
        points:[
            "Developed and maintained the company's website",
            "Collaborated with the team to develop new features",
            "Tested and debugged the website",
        ]
    }
]


function Experience() {
    

  return (
    <div className='flex flex-col items-center h-screen ' id='experience'>
        <div className="h-screen w-full bg-white bg-dot-black/[0.15] flex items-center justify-center absolute top-screen left-0">
        </div>

        <h1 className='relative mt-20'>
            Experience
        </h1>
        <ExperienceTimeLine/>
    </div>
  )
}


export default Experience