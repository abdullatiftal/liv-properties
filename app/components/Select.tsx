'use client'

import { useState } from 'react'
import s from '@/app/ui/main.module.css'
import Image from 'next/image'

interface Option {
    value: string
    label: string
}

interface CustomSelectProps {
    options: Option[]
    value: string
    onChange: (value: string) => void
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)


export const Select = ({ options, value, onChange }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleSelect = (option: string) => {
        onChange(option)
        setIsOpen(false)
    }

    return (
        <div className={`relative ${s.hoverable}`}>
            <button
                className={`relative py-3 pl-2 grid place-items-center grid-cols-2 gap-2 text-[#eddfd0] bg-transparent focus:outline-none`}
                onClick={handleClick}
            >
                {capitalize(value)}
                <Image src='/icons/expand_more.svg' alt='Arrow down' width={32} height={32}
                    className={`ml-[-10px] mr-[12px] transition duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`absolute top-full left-0 w-full rounded shadow mt-1 bg-[#eddfd0] pointer-events-none
                transition duration-200 ease-in-out opacity-0 ${isOpen ? 'opacity-100 pointer-events-auto z-10' : ''}`}>
                {options.map((option) => (
                    <li
                        key={option.value}
                        className="px-2 py-2 transition duration-200 hover:bg-[#fff9f3] text-[#827160]"
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
