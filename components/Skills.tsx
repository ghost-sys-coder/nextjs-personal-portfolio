import React from 'react'
import Image from 'next/image'
import { experiences } from '@/constants'

const Skills = () => {
    return (
        <div className='md:my-20 my-10 flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-2xl md:text-4xl font-bold pb-3 dark:text-light-text-2 text-center'>I know That <span className='text-dark-button dark:text-light-button'>Good Development</span> Makes <span className='text-dark-button dark:text-light-button'>Good Business</span></h1>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {experiences.map((item) => (
                    <div key={item.id} className='flex flex-col gap-2'>
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={300}
                            height={300}
                            className='rounded-2xl object-fill w-full h-[200px]'
                        />
                        <h3 className='text-dark-text font-bold dark:text-light-text-1'>{item.name}</h3>
                        <p className='text-dark-text dark:text-light-text-2 font-light text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills