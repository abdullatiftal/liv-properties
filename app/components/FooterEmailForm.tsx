'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { apiUrl, fetcher } from '@/app/constants'

interface Response {
    status: string
    message: string
}


export const FooterEmailForm = () => {
    const [email, setEmail] = useState('')
    // const { data: submittionResponse, error, isLoading } = useSWR<Response>(apiUrl + '/api/search', fetcher)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await fetch('/api/opt-in-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email),
        })
        if (!response.ok) {
            console.error('Error submitting form:', response.statusText)
        } else {
            console.log('Form submitted successfully!')
            setEmail('')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name)
        setEmail(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='mt-[19px] text-sm font-[200]'>Enter your email</label>
            <div className='mt-[-15px] flex gap-1 items-end'>
                <input type="email" name="email" id="email_input" value={email} onChange={handleChange} className="w-[200px] block border-0 py-1.5 bg-transparent
                    shadow-[rgb(237,223,208,0.5)_0px_1px_0_0] ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6
                    transition duration-200 ease-in-out`"/>
                <button className='py-[16px] px-[35px] bg-[#938270] rounded-[40px] text-sm'>Sign&nbsp;Up</button>
            </div>
        </form>
    )
}
