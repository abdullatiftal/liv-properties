'use client';

import s from '@/app/ui/main.module.css';
import { useState, useRef, useEffect } from 'react';

const useAutoResizeTextarea = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resize = () => {
        if (textareaRef.current) {
            // Reset the height to 'auto' to get the correct scrollHeight
            textareaRef.current.style.height = 'auto';
            // Set the height to scrollHeight to fit the content
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', resize);
        }
        return () => {
            if (textareaRef.current) {
                textareaRef.current.removeEventListener('input', resize);
            }
        };
    }, []);

    return { textareaRef, resize };
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface EnquireFormProps {
    hasUploadField?: boolean;
}

export const EnquireForm = ({ hasUploadField = false }: EnquireFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [selectedFile, setSelectedFile] = useState('');
    const { textareaRef, resize: resizeTextarea } = useAutoResizeTextarea();

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value });
        resizeTextarea();
    };

    const handleFileSelect: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (file) setSelectedFile(file.name);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            console.error('Error submitting form:', response.statusText);
        } else {
            console.log('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }
    };

    useEffect(() => {
        // fix for id links
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const id = el.getAttribute('href')?.slice(1);
                if (!id) return;
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className='mt-[43px] text-white'>
                <div className='flex w-full flex-wrap justify-between gap-x-[30px] gap-y-[28px]'>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium leading-6'
                        >
                            Your Name*
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            autoComplete='given-name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`block w-[100%] border-0 bg-transparent py-1.5 shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                                transition duration-200 ease-in-out focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium leading-6'
                        >
                            Email Address*
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`block w-[100%] border-0 bg-transparent py-1.5 shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                                transition duration-200 ease-in-out focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium leading-6'
                        >
                            Contact Number*
                        </label>
                        <input
                            type='text'
                            name='phone'
                            id='phone'
                            autoComplete='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`block w-[100%] border-0 bg-transparent py-1.5 shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                                transition duration-200 ease-in-out focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6`}
                        />
                    </div>
                    <div className='w-full md:w-[calc(50%-26px)] msm:w-[calc(50%-15px)]'>
                        <label
                            htmlFor='subject'
                            className='block text-sm font-medium leading-6'
                        >
                            Subject*
                        </label>
                        <input
                            type='text'
                            name='subject'
                            id='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className={`block w-[100%] border-0 bg-transparent py-1.5 shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                                transition duration-200 ease-in-out focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6`}
                        />
                    </div>
                </div>
                {hasUploadField ? (
                    <label
                        className='mt-[28px] block w-full text-sm font-medium leading-6'
                        htmlFor='upload-cv'
                    >
                        <div>Upload CV</div>
                        <div
                            className='flex w-full cursor-pointer items-baseline justify-between bg-transparent py-1.5 pb-[28px] shadow-[white_0px_1px_0_0] ring-1 ring-inset
                            ring-transparent transition duration-200 ease-in-out focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6'
                        >
                            <span>{selectedFile}</span>
                            <button
                                type='submit'
                                className='rounded-3xl border border-solid border-[#EDDFD0] px-[50px] py-[15px] text-sm transition
                            duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                            >
                                Upload
                            </button>
                        </div>
                        <input
                            type='file'
                            id='upload-cv'
                            name='upload-cv'
                            onChange={handleFileSelect}
                            className='hidden'
                        />
                    </label>
                ) : null}
                <div className='mt-[33px] w-full'>
                    <label
                        htmlFor='message'
                        className='text-sm font-medium leading-6'
                    >
                        Your Message
                    </label>
                    <div className='mt-2'>
                        <textarea
                            ref={textareaRef}
                            id='message'
                            name='message'
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full border-0 bg-transparent py-1.5 shadow-[white_0px_1px_0_0]
                                ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6'
                        ></textarea>
                    </div>
                </div>
                <div className='w-full'>
                    <button
                        type='submit'
                        className='mx-auto mt-[39px] block rounded-3xl border border-solid border-[#EDDFD0] px-[50px] py-[15px] text-sm transition
                        duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};
