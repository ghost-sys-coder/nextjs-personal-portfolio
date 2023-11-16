"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import { projects } from '@/constants'

const Project = () => {
    // const [filterProjects, setFilterProjects] = useState(projects);
    const [data, setData] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('All');
    const projectTags = ['All', 'Web App', 'Mobile App', 'ReactJS', 'NextJS', 'JavaScript'];

    const handleFilter = (item: string) => {
        setActiveFilter(item);

        if (item === 'All') {
            setData(projects)
        } else {
            setData(projects.filter(project => project.tag.includes(item)))
        }
    }

    return (
        <div className='md:py-10 py-5' id='projects'>
            <h1 className='text-4xl font-bold capitalize pb-10 text-center text-dark-button dark:text-light-button'>Projects</h1>
            <div className="w-full flex justify-center flex-wrap items-center gap-4 mb-8">
                {projectTags.map((project, index) => (
                    <button
                        className={`border-none outline-none rounded-md text-sm shadow-md py-1 px-3 ${activeFilter === project ? 'bg-black text-white' : 'bg-white text-dark-text'}`}
                        type='button'
                        onClick={()=> handleFilter(project)}
                        key={project}>
                        {project}
                    </button>
                ))}
            </div>
            <div className='grid place-items-center text-center w-full gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {data.map((project) => (
                    <div key={project.id} className='w-full rounded-lg overflow-hidden h-[300px] relative'>
                        <Image
                            src={project.imageUrl}
                            alt={project.name}
                            width={200}
                            height={200}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-20 backdrop-blur-sm bg-white/30 bg-transparent backdrop-opacity-50'>
                            <Link target='_blank' href={project.projectUrl}>
                                <AiFillEye size={30} />
                            </Link>
                            <Link target='_blank' href={project.githubUrl}>
                                <AiFillGithub size={30} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project