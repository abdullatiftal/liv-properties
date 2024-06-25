'use client'

import Image from 'next/image'
import s from '@/app/ui/main.module.css'

export const PageSearch = ({type = 'ready'}) => {
    if (type === 'ready')
        return (
            <div className='text-[12px] mt-[50px]'>
                <div className='flex gap-4 sm:flex-wrap flex-col sm:flex-row'>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>Price Range</span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>Bedroom</span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>Bathroom</span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>Home type</span>
                    <span className={`${s.propFilter} flex justify-between w-full sm:w-[135px]`}>
                        <span>Price low to high</span>
                        <Image src='/icons/expand_more.svg' alt='Arrow down' width={24} height={24} />
                    </span>
                </div>
                <div className='flex mt-[17px] text-center flex-row'>
                    <span className={`${s.prop} flex-1 max-w-[50%] sm:max-w-[135px]`}>Rent</span>
                    <span className={`${s.prop} flex-1 max-w-[50%] sm:max-w-[135px] ${s.propActive}`}>Buy</span>
                </div>
            </div>
        );
    return (
        <div className='text-[12px] mt-[50px]'>
                <div className='flex gap-4 flex-wrap'>
                    <span className={`${s.upcomingSearch} flex justify-between`}>
                        Type Here
                        <Image src='/icons/search.svg' alt='Search icon' width={16} height={16} className='ml-[-20px] inline-block' />
                    </span>
                </div>
        </div>
    );
}
