import { Experience } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="relative flex items-center justify-center h-32 w-32 xl:h-48 xl:w-48 rounded-full bg-gray-700">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className=" fill "
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company}
        />
      </div>
      <div className="px-0 md:px-10">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-4xl font-light">{experience.company}</h4>
            <p className="font-bold text-2xl mt-1 text-[#F7AB0A]">
              {experience.company}
            </p>
            <div className="flex space-x-2 my-2">
              {experience.technologies.map((technology) => (
                <div className="relative h-10 w-10" key={technology._id}>
                  <Image
                    fill
                    className="rounded-full object-cover"
                    src={urlFor(technology?.image).url()}
                    alt={technology.title}
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : experience.dateEnded
              ? new Date(experience.dateEnded).toDateString()
              : ""}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
