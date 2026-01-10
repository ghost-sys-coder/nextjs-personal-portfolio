"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillEye, AiFillCopy } from 'react-icons/ai'
import { projects } from '@/constants'

const Project = () => {
    const [data, setData] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('All');
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const projectTags = ['All', 'Web App', 'Mobile App', 'ReactJS', 'NextJS', 'JavaScript'];

    const handleFilter = (item: string) => {
        setActiveFilter(item);

        if (item === 'All') {
            setData(projects)
        } else {
            setData(projects.filter(project => project.tag.includes(item)))
        }
    }

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    }

    return (
        <div className='md:py-10 py-5' id='projects'>
            <h1 className='text-4xl font-bold capitalize pb-10 text-center text-dark-button dark:text-light-button'>Projects</h1>
            <div className="w-full flex justify-center flex-wrap items-center gap-4 mb-8">
                {projectTags.map((project, index) => (
                    <button
                        className={`border-none outline-none rounded-md text-sm shadow-md py-1 px-3 ${activeFilter === project ? 'bg-black text-white' : 'bg-white text-dark-text'}`}
                        type='button'
                        onClick={() => handleFilter(project)}
                        key={project}>
                        {project}
                    </button>
                ))}
            </div>
            <div className='grid place-items-center text-center w-full gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {data.map((project) => (
                    <div key={project.id} className='w-full rounded-lg overflow-hidden h-[300px] relative group'>
                        <Image
                            src={project.imageUrl}
                            alt={project.name}
                            width={200}
                            height={200}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300'>
                            <div className='flex items-center gap-10'>
                                <Link className='text-red-900 hover:scale-110 transition-transform' target='_blank' href={project.projectUrl}>
                                    <AiFillEye size={30} />
                                </Link>
                                <Link className='text-red-900 hover:scale-110 transition-transform' target='_blank' href={project.githubUrl}>
                                    <AiFillGithub size={30} />
                                </Link>
                            </div>
                            
                            {project.credentials && (
                                <div className='bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-lg text-left text-xs w-[90%]'>
                                    <p className='font-semibold mb-2 text-gray-700 dark:text-gray-200'>Login Credentials:</p>
                                    <div className='space-y-1'>
                                        <div className='flex items-center justify-between gap-2'>
                                            <span className='text-gray-600 dark:text-gray-300'>
                                                <span className='font-medium'>Email:</span> {project.credentials.email}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(project.credentials!.email, `email-${project.id}`)}
                                                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                                title='Copy email'
                                            >
                                                {copiedField === `email-${project.id}` ? '✓' : <AiFillCopy size={14} />}
                                            </button>
                                        </div>
                                        <div className='flex items-center justify-between gap-2'>
                                            <span className='text-gray-600 dark:text-gray-300'>
                                                <span className='font-medium'>Pass:</span> {project.credentials.password}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(project.credentials!.password, `pass-${project.id}`)}
                                                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                                title='Copy password'
                                            >
                                                {copiedField === `pass-${project.id}` ? '✓' : <AiFillCopy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project