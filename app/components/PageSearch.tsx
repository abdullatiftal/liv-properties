'use client';

import Image from 'next/image';
import s from '@/app/ui/main.module.css';

export const PageSearch = ({ type = 'ready' }) => {
    if (type === 'ready')
        return (
            <div className='mt-[50px] text-[12px]'>
                <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>
                        Price Range
                    </span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>
                        Bedroom
                    </span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>
                        Bathroom
                    </span>
                    <span className={`${s.propFilter} w-full sm:w-[135px]`}>
                        Home type
                    </span>
                    <span
                        className={`${s.propFilter} flex w-full justify-between sm:w-[135px]`}
                    >
                        <span>Price low to high</span>
                        <Image
                            src='/icons/expand_more.svg'
                            alt='Arrow down'
                            width={24}
                            height={24}
                        />
                    </span>
                </div>
                <div className='mt-[17px] flex flex-row text-center'>
                    <span
                        className={`${s.prop} max-w-[50%] flex-1 sm:max-w-[135px]`}
                    >
                        Rent
                    </span>
                    <span
                        className={`${s.prop} max-w-[50%] flex-1 sm:max-w-[135px] ${s.propActive}`}
                    >
                        Buy
                    </span>
                </div>
            </div>
        );
    return (
        <div className='mt-[50px] text-[12px]'>
            <div className='flex flex-wrap gap-4'>
                <span className={`${s.upcomingSearch} flex justify-between`}>
                    Type Here
                    <Image
                        src='/icons/search.svg'
                        alt='Search icon'
                        width={16}
                        height={16}
                        className='ml-[-20px] inline-block'
                    />
                </span>
            </div>
        </div>
    );
};
