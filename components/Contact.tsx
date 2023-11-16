'use client'
import React, { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setDetails(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!details.fullname || !details.email || !details.phoneNumber) {
            return toast.error('Missing fields', {
                position: 'top-center',
                duration: 5000,
                style: {
                    backgroundColor: 'red',
                    color: '#fff',
                    borderRadius: '10px'
                }
            })
        }
        
        setLoading(true);
        try {
            const response = await addDoc(collection(db, 'clients'), {
                fullname: details.fullname,
                email: details.email,
                phoneNumber: details.phoneNumber,
                subject: details.subject,
                message: details.message
            });
            console.log(response);
            toast.success('Thank you for reaching out!', {
                position: 'top-center',
                duration: 5000,
                style: {
                    backgroundColor: 'limegreen',
                    borderRadius: '10px',
                    color: '#fff',
                }
            })
        } catch (error) {
            console.log(error);
            toast.error('Something went, please try again!', {
                position: 'top-center',
                duration: 5000,
                style: {
                    backgroundColor: 'red',
                    borderRadius: '10px',
                    color: '#fff',
                }
            })
        } finally {
            setLoading(false);
            setDetails({
                fullname: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: ''
            })
        }
    }

    return (
        <section id='contact' className="mt-10">
            <h1 className="text-dark-button dark:text-light-button font-bold text-center pb-10 text-3xl md:text-5xl">Contact Me</h1>
            <form className='p-2 rounded-md' onSubmit={handleSubmit}>
                <div className='flex md:gap-2 gap-0 flex-col md:flex-row'>
                    <div className='input-container flex-1'>
                        <input
                            type="text" id="fullname" name='fullname'
                            placeholder='Enter fullname...'
                            value={details?.fullname}
                            onChange={handleChange}
                            className='min-h-[45px]'
                        />
                    </div>
                    <div className="input-container flex-1">
                        <input
                            type="email" name="email" id="email"
                            placeholder='Enter email..'
                            value={details?.email}
                            onChange={handleChange}
                            className='min-h-[45px]'
                        />
                    </div>
                </div>
                <div className="input-container">
                    <input
                        type="text" id="subject" name='subject'
                        placeholder='Subject'
                        value={details?.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text" id="phone" name='phoneNumber'
                        placeholder='phone...'
                        value={details?.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                
                    <textarea name='message' id="message"
                    placeholder='Message...'
                    className='p-2 font-mono w-full min-h-min shadow-lg'
                    value={details?.message}
                    onChange={handleChange}
                    />
                <button
                    className='py-2 px-4 rounded-md shadow-lg mt-2 cursor-pointer text-white bg-dark-theme dark:bg-white dark:text-black sm:w-1/3 w-[100%] block mx-auto'
                    type="submit"
                >
                    {loading ? 'Sending' : 'Send Message'}
                </button>
            </form>
            <Toaster />
        </section>
    )
}

export default Contact