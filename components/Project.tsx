"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillEye, AiFillCopy } from 'react-icons/ai'
import { projects } from '@/constants'
import IframePreview from './IframePreview'

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
                    <div key={project.id} className='w-full rounded-lg overflow-hidden h-[250px] relative group bg-gray-200 dark:bg-gray-800'>
                        {/* Iframe container with proper scaling */}
                        <IframePreview url={project.projectUrl} />
                        
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300 z-10'>
                            <h3 className='text-white font-bold px-4 text-base'>{project.name}</h3>

                            <div className='flex items-center gap-10'>
                                <Link
                                    className='text-white hover:text-red-400 hover:scale-110 transition-transform bg-black/50 p-3 rounded-full'
                                    target='_blank'
                                    href={project.projectUrl}
                                    title="View Live Site"
                                >
                                    <AiFillEye size={30} />
                                </Link>
                                <Link
                                    className='text-white hover:text-red-400 hover:scale-110 transition-transform bg-black/50 p-3 rounded-full'
                                    target='_blank'
                                    href={project.githubUrl}
                                    title="View GitHub Repo"
                                >
                                    <AiFillGithub size={30} />
                                </Link>
                            </div>

                            {project.credentials && (
                                <div className='bg-white/95 dark:bg-gray-900/95 p-3 rounded-lg shadow-xl text-left text-xs w-[90%] border border-gray-200 dark:border-gray-700'>
                                    <p className='font-semibold mb-2 text-gray-800 dark:text-gray-100 text-sm'>🔐 Login Credentials</p>
                                    <div className='space-y-2'>
                                        <div className='flex items-center justify-between gap-2 bg-gray-50 dark:bg-gray-800 p-2 rounded'>
                                            <span className='text-gray-700 dark:text-gray-200 truncate flex-1'>
                                                <span className='font-medium'>Email:</span> {project.credentials.email}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(project.credentials!.email, `email-${project.id}`)}
                                                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex-shrink-0 bg-white dark:bg-gray-700 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                                                title='Copy email'
                                            >
                                                {copiedField === `email-${project.id}` ? '✓' : <AiFillCopy size={16} />}
                                            </button>
                                        </div>
                                        <div className='flex items-center justify-between gap-2 bg-gray-50 dark:bg-gray-800 p-2 rounded'>
                                            <span className='text-gray-700 dark:text-gray-200 truncate flex-1'>
                                                <span className='font-medium'>Pass:</span> {project.credentials.password}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(project.credentials!.password, `pass-${project.id}`)}
                                                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex-shrink-0 bg-white dark:bg-gray-700 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                                                title='Copy password'
                                            >
                                                {copiedField === `pass-${project.id}` ? '✓' : <AiFillCopy size={16} />}
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