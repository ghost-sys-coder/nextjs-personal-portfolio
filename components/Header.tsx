"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { skills } from '@/constants'

const Header = () => {
    const fileDownload = () => {
        const pdfUrl = '/resume/cv.pdf';
        const link = document.createElement('a');
        link.target = '_blank';
        link.href = pdfUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <header className='intro'>
            <div className='flex gap-4 justify-start items-start sm:items-center sm:flex-row flex-col'>
                <Image
                    src={'/profileImage2.jpg'}
                    alt='profile'
                    width={70}
                    height={70}
                    className='rounded-full object-cover shadow-lg'
                />
                <div className="sm:w-2/3 w-[100%]">
                    <h1 className='text-3xl font-bold text-dark-button dark:text-light-text-1 pb-2'>Tamale Frank</h1>
                    <p className='text-dark-text font-bold dark:text-light-text-2 pb-4'>
                        I am a MERN stack developer, programming and transforming ideas into functional, elegant solutions for small and large scale businesses, and start-ups
                    </p>
                    <button
                        onClick={fileDownload}
                        className='bg-dark-button text-light-text-1 py-1 px-3 rounded-sm cursor-pointer dark:bg-light-button dark:text-dark-text'
                        type='button'
                    >Download Resume</button>
                </div>
            </div>
            <div id='about' className='my-3 w-full shadow-xl rounded-md p-2'>
                <h2 className='text-dark-button dark:text-light-text-1 capitalize text-xl mb-2 font-bold'>About Me</h2>
                <p className='text-dark-text dark:text-light-text-1'>
                I am a highly skilled and experienced MERN Stack developer with a passion for building innovative and user-friendly web applications. I have a strong understanding of all four components of the MERN Stack (MongoDB, Express.js, React.js, and Node.js), and React Native for cross platform mobile app development. I am proficient in using them to develop high-performance, scalable web and mobile apps.
                </p>
                <p className='text-dark-text dark:text-light-text-1 pt-3'>
                I have a proven track record of success in delivering high-quality projects on time and within budget. I have worked on a variety of different web applications, from small personal projects to large enterprise applications. I am also skilled in a variety of other web  and mobile development technologies, such as HTML, CSS, JavaScript, TypeScript, SQL, React-Native, React-Native Async/Await, Version control: Git, Appwrite, AWS, Firebase, Planetscale, Prisma among others.
                </p>
            </div>
            <div className="flex py-3 px-6">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: .5 }}
                    className='flex gap-10 w-full flex-wrap items-center justify-center'
                >
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className='rounded-full overflow-hidden'
                        >
                            <Image
                                src={skill.imageUrl}
                                alt={skill.name}
                                width={50}
                                height={50}
                                className='object-cover'
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </header>
    )
}

export default Header