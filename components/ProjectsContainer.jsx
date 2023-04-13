import React, { useState, useEffect } from "react"
import Image from "next/image"
import { TbArrowUpRight } from "react-icons/tb"
import projetsData from "../data/projets.json"
import Fade from 'react-reveal/Fade'

function ProjectsContainer() {
  const [projets, setProjets] = useState([]);
  const assetsPath = '../public/assets/projects/';

  useEffect(() => {
    setProjets(projetsData.projets);
  }, []);
  return (
    <section className="py-8 md:py-14" id="projects">
      <h2>
        <span className="font-light">My</span> Projects.
      </h2>
      <p className="max-w-3xl my-4">
      Discover in this section a selection of my most recent projects. Each project represents an opportunity for me to explore new technologies and to practice my front-end web development skills.
      </p>

      {/* Showcase */}
      <Fade cascade>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* Card */}
        {projets.map((projet) => (
            <li key={projet.id} className="px-4 my-4 space-y-4 group">
                <a
                className="inline-flex items-center justify-between w-full py-1 transition border-b"
                href={projet.link}
                target="_blank"
                >
                  <h3 className="transition group-hover:translate-x-2">{projet.nom}</h3>
                  <TbArrowUpRight className="hidden w-auto h-6 transition group-hover:block" />
                </a>
                <a href={projet.link} target="_blank">
                  <Image
                  className="mt-4"
                  src={`/assets/projects/`+projet.image}
                  alt={projet.nom}
                  width={1920}
                  height={1080}
                  blurDataURL="URL"
                  placeholder="blur"
                  />
                </a>
                <p className="transition group-hover:text-white">
                  {projet.description}
                </p>
                <div className="flex flex-wrap items-center text-xs gap-x-2">
                  {projet.stack.map((technologie) => (
                    <p className="px-1.5 rounded py bg-neutral-800 group-hover:text-violet-400" key={technologie}>{technologie}</p>
                  ))}
                </div>
            </li>
        ))}
      </ul>
      </Fade>
    </section>
  );
}

export default ProjectsContainer;
