'use client';
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { employment, skills } from '@/constants'

const Experience = () => {
    return (
        <motion.div
            id='experience' className='mb-20 h-[350px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 3}}
        >
            <h1 className='text-dark-button dark:text-light-button md:text-4xl text-2xl text-center pb-4 font-bold'>Skills & Experience</h1>
            <div className='flex gap-5 md:gap-10 xl:gap-20 items-center justify-center mt-10 sm:flex-row flex-col'>
                <div className='flex items-center gap-4 flex-wrap'>
                    {skills.map((skill) => (
                        <Image
                            key={skill.id}
                            src={skill.imageUrl}
                            width={50}
                            height={50}
                            alt={skill.name}
                            className='rounded-full'
                        />
                    ))}
                </div>
                <div className='flex flex-col gap-3'>
                    {employment.map((item)=> (
                        <div key={item.id} className='flex gap-4'>
                            <p className='text-dark-button font-bold'>{item.year}</p>
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-bold text-black dark:text-light-text-1'>{item.title}</h1>
                                <span className='text-gray-800 font-bold dark:text-light-text-2'>{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience