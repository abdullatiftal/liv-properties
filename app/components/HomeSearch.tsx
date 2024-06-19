'use client'

import '@/app/ui/index.css'
import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect } from 'react'
import { Select } from '@/app/components'
// import { Select, SelectItem } from "@nextui-org/react"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

type DealType = 'buy' | 'rent'


export const HomeSearch = () => {
    const [dealType, setDealType] = useState<DealType>('buy')
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [projType, setProjType] = useState<'ready' | 'new'>('ready')
    const [cb, setCb] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')

    const [selectedOption, setSelectedOption] = useState<'buy' | 'rent'>('buy')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value as 'buy' | 'rent')
    }

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isLargeScreen ? (
        <>
            <div className='px-[3vw] sm:px-[85px] max-[639px]:mx-[3vw] mt-[400px] xl:mt-[200px] max-[639px]:w-full max-[639px]:text-center flex text-sm'>
                <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] ${projType === 'ready' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setProjType('ready')}>Ready</div>
                <div className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] ${projType === 'new' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setProjType('new')}>New Projects</div>
            </div>
            <div className='mt-[15px] ml-[-13px] px-[3vw] sm:px-[85px] flex flex-wrap text-sm'>
                <Select
                    options={[{ value: 'rent', label: 'Rent' }, { value: 'buy', label: 'Buy' }]}
                    value={dealType}
                    onChange={(v) => setDealType(v as DealType)}
                />
                <input type="text" name="cb" id="cb_input" value={cb} onChange={(e) => setCb(e.target.value)} className={`mx-[11px] w-[200px] block border-0 py-1.5 bg-transparent
                    ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-[#EDDFD0] hover:ring-[#EDDFD0]/50 sm:leading-6
                    transition duration-200 ease-in-out placeholder-[#eddfd0] ${s.hoverable}`} placeholder='Community or Building' />
                {/* <div className={`mr-[11px] relative m-4 max-w-[fit-content] group ${s.hoverable}`}>
                    <input type='text' className="outline-none px-3 py-3 peer ring-transparent bg-transparent border-0" placeholder=" " value={cb} onChange={(e) => setCb(e.target.value)} />
                    <label className="absolute left-[9px] top-px text-sm text-[#EDDFD0] transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-[#EDDFD0]">
                        Community or Building
                    </label>
                    <fieldset className="inset-0 absolute border-0 border-[#EDDFD0] rounded pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible 
                        group-focus-within:!border-[#EDDFD0] group-focus-within:border-2">
                        <legend className="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">Label</legend>
                    </fieldset>
                    <fieldset className="inset-0 absolute rounded pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible group-focus-within:border-2 group-focus-within:!border-[#EDDFD0]">
                        <legend className="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap">
                            Community or Building
                        </legend>
                    </fieldset>
                </div> */}
                <div className={`${s.line}`} />
                <input type="text" name="location" id="location_input" value={location} onChange={(e) => setLocation(e.target.value)} className={`mx-[11px] w-[200px] block border-0 py-1.5 bg-transparent
                    ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-[#EDDFD0] hover:ring-[#EDDFD0]/50 sm:leading-6
                    transition duration-200 ease-in-out placeholder-[#eddfd0] ${s.hoverable}`} placeholder='Location' />
                <div className={`${s.line}`} />
                <input type="text" name="price" id="price_input" value={price} onChange={(e) => setPrice(e.target.value)} className={`mx-[11px] w-[200px] block border-0 py-1.5 bg-transparent
                    ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-[#EDDFD0] hover:ring-[#EDDFD0]/50 sm:leading-6
                    transition duration-200 ease-in-out placeholder-[#eddfd0] ${s.hoverable}`} placeholder='Price' />
                <div className={`${s.line}`} />
                <button className={`mx-[18px] py-3 pl-2 grid place-items-center grid-cols-2 gap-1 ${s.hoverable}`}>
                    Search
                    <Image src='/icons/search.svg' alt='Search icon' width={17} height={17} className='ml-[-20px]' />
                </button>
            </div>
        </>
    ) : (
        <>
            <div className='px-[3vw] mt-[300px] xl:mt-[200px] w-full text-center flex text-sm'>
                <div className={`flex-1 pb-[8px] min-w-[132px] border-b-[3px] border-solid border-[#eddfd0]`}>Ready</div>
                <div className={`flex-1 pb-[8px] min-w-[132px] border-b border-solid border-[#eddfd0]`}>New Projects</div>
            </div>
            <div className='mt-[15px] px-[3vw] flex flex-col text-sm'>
                <button className='py-4 flex justify-between grid-cols-2 gap-1 hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    border-b border-solid border-[#eddfd0] border-opacity-60 active:text-black transition duration-200 ease-in-out'>
                    Buy
                    <Image src='/icons/expand_more.svg' alt='Arrow down' width={29} height={29} className='mt-[-5px]' />
                </button>
                <button className='pt-[24px] pb-[15px] flex hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out
                    border-b border-solid border-[#eddfd0] border-opacity-60'>Community or Building</button>
                <button className='pt-[24px] pb-[15px] flex justify-between grid-cols-2 gap-1 hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                        border-b border-solid border-[#eddfd0] border-opacity-60 active:text-black transition duration-200 ease-in-out'>
                    Location
                    <Image src='/icons/location_round.svg' alt='Location' width={24} height={24} className='mt-[-5px] mr-[5px]' />
                </button>
                <button className='pt-[24px] pb-[15px] flex hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out
                    border-b border-solid border-[#eddfd0] border-opacity-60'>Price</button>
                <button className='mt-[26px] mx-auto px-[30px] py-[10px] w-[114px] flex gap-1 rounded-3xl bg-[#EDDFD0] hover:bg-white/30 text-[#916940]
                    active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Search
                    <Image src='/icons/search_brown.svg' alt='Search icon' width={13} height={13} className='mt-[2px]' />
                </button>
            </div>
        </>
    )
}
