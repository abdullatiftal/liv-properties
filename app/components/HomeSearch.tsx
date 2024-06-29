'use client';

import '@/app/ui/index.css';
import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import { useState, useLayoutEffect } from 'react';
import { Select } from '@/app/components';
// import { Select, SelectItem } from "@nextui-org/react"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type DealType = 'buy' | 'rent';

export const HomeSearch = () => {
    const [dealType, setDealType] = useState<DealType>('buy');
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [projType, setProjType] = useState<'ready' | 'new'>('ready');
    const [cb, setCb] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const [selectedOption, setSelectedOption] = useState<'buy' | 'rent'>('buy');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value as 'buy' | 'rent');
    };

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isLargeScreen ? (
        <div className='home-search z-[3] mt-[250px] small:mt-[30px]'>
            <div className='max-[639px]:mx-[3vw] max-[639px]:w-full max-[639px]:text-center flex px-[3vw] text-sm sm:px-0 small:px-[85px]'>
                <div
                    className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] ${projType === 'ready' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setProjType('ready')}
                >
                    Ready
                </div>
                <div
                    className={`max-[639px]:flex-1 pb-[8px] sm:min-w-[132px] ${projType === 'new' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable} cursor-pointer`}
                    onClick={() => setProjType('new')}
                >
                    New Projects
                </div>
            </div>
            <div className='ml-[-13px] mt-[15px] flex flex-wrap px-[3vw] text-sm sm:px-0 small:px-[85px]'>
                <Select
                    options={[
                        { value: 'rent', label: 'Rent' },
                        { value: 'buy', label: 'Buy' }
                    ]}
                    value={dealType}
                    className='home-search'
                    onChange={(v) => setDealType(v as DealType)}
                />
                <div className={`mx-[11px] ${s.hoverable}`}>
                    <input
                        type='text'
                        name='cb'
                        id='cb_input'
                        value={cb}
                        onChange={(e) => setCb(e.target.value)}
                        className={`block h-full border-0 bg-transparent py-1.5 text-center text-[100%]
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50
                    focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:min-w-[150px]`}
                        placeholder='Community or Building'
                    />
                </div>
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
                <div className={`mx-[11px] ${s.hoverable}`}>
                    <input
                        type='text'
                        name='location'
                        id='location_input'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={`block h-full w-[80px] border-0 bg-transparent py-1.5 text-center text-[100%]
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50
                    focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
                        placeholder='Location'
                    />
                </div>
                <div className={`${s.line}`} />
                <div className={`mx-[11px] ${s.hoverable}`}>
                    <input
                        type='text'
                        name='price'
                        id='price_input'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={`block h-full w-[80px] border-0 bg-transparent py-1.5 text-center text-[100%]
                    placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition duration-200 ease-in-out hover:ring-[#EDDFD0]/50
                    focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0] sm:leading-6 small:w-[110px] ${s.hoverable}`}
                        placeholder='Price'
                    />
                </div>
                <div className={`${s.line}`} />
                <button
                    className={`ml-[18px] mr-[0px] grid grid-cols-2 place-items-center gap-1 py-3 pl-2 small:mx-[18px] ${s.hoverable}`}
                >
                    Search
                    <Image
                        src='/icons/search.svg'
                        alt='Search icon'
                        width={17}
                        height={17}
                        className='ml-[-20px]'
                    />
                </button>
            </div>
        </div>
    ) : (
        <>
            <div className='mt-[300px] flex w-full px-[3vw] text-center text-sm xl:mt-[200px]'>
                <div
                    className={`min-w-[132px] flex-1 border-b-[3px] border-solid border-[#eddfd0] pb-[8px]`}
                >
                    Ready
                </div>
                <div
                    className={`min-w-[132px] flex-1 border-b border-solid border-[#eddfd0] pb-[8px]`}
                >
                    New Projects
                </div>
            </div>
            <div className='mt-[15px] flex flex-col px-[3vw] text-sm'>
                <button
                    className='flex grid-cols-2 justify-between gap-1 border-b border-solid border-[#eddfd0] border-opacity-60
                    py-4 transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Buy
                    <Image
                        src='/icons/expand_more.svg'
                        alt='Arrow down'
                        width={29}
                        height={29}
                        className='mt-[-5px]'
                    />
                </button>
                <button
                    className='flex border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] transition duration-200 ease-in-out
                    hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Community or Building
                </button>
                <button
                    className='flex grid-cols-2 justify-between gap-1 border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px]
                        pt-[24px] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Location
                    <Image
                        src='/icons/location_round.svg'
                        alt='Location'
                        width={24}
                        height={24}
                        className='mr-[5px] mt-[-5px]'
                    />
                </button>
                <button
                    className='flex border-b border-solid border-[#eddfd0] border-opacity-60 pb-[15px] pt-[24px] transition duration-200 ease-in-out
                    hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Price
                </button>
                <button
                    className='mx-auto mt-[26px] flex w-[114px] gap-1 rounded-3xl bg-[#EDDFD0] px-[30px] py-[10px] text-[#916940] transition
                    duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Search
                    <Image
                        src='/icons/search_brown.svg'
                        alt='Search icon'
                        width={13}
                        height={13}
                        className='mt-[2px]'
                    />
                </button>
            </div>
        </>
    );
};
