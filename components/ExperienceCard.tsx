'use client'
import Image from "next/image";
import React from "react";
import  {VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <VerticalTimelineElement
    //   className="vertical-timeline-element--work"
      contentStyle={{ background: "#FF4D00", color: "black", }}
      contentArrowStyle={{ borderRight: "7px solid  #FF4D00" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
            <Image src={experience.icon} alt={experience.company_name} width={10} height={10} className="w-[60%] h-[60%] object-contain"/>
        </div>
      }
    >
        <div className="min-w-[80vw]">
            <h3 className="text-white text-[24px] font-bold">
                {experience.title}
            </h3>
            <p className="text-white text-[16px] font-semibold" style={{margin:0}}>
                {experience.company_name}
            </p>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {
                    experience.points.map((point,idx)=>(
                        <li key={`experience-point-${idx}`} className="text-black text-[14px] pl-1 tracking-wider">
                            {point}
                        </li>
                    ))
                }

            </ul>
        </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
