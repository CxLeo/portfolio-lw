'use client'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
// import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from './Experience';
import ExperienceCard from './ExperienceCard';

function ExperienceTimeLine() {
  return (
    <div className='mt-20 flex flex-col'>
        <VerticalTimeline
        lineColor='#FF4D00'>
            {
                experiences.map((experience,idx)=>(
                    <ExperienceCard key={idx} experience={experience}/>
                ))
            }
        </VerticalTimeline>
    </div>
  )
}

export default ExperienceTimeLine