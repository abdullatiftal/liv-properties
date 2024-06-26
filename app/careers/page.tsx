import '@/app/ui/index.css';
import { EnquireForm } from '@/app/components';
import Link from 'next/link';
import Image from 'next/image';

export default async function CareersPage() {
    return (
        <div className='mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div
                className='w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[30px] text-start text-[40px] font-[700] leading-[38px]
                md:pb-[50px] xl:pb-[79px] small:text-[69px] small:leading-[88px]'
            >
                <h2>Careers</h2>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <div className='text-[25px] font-[200]'>
                        Marketing Executive
                    </div>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We&apos;re looking for a mid-level product designer to
                        join our team.
                    </div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property
                        is not just about financial gains. That&apos;s why, we
                        go the extra mile to provide our clients with a hassle
                        free customer-centric journey that ensures comfort from
                        A to Z. Our after sales experience extends far and
                        beyond regular sales to create a long withstanding
                        relationship with our clients where trust and
                        credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px] text-xs'>
                            <Image
                                src='/icons/location.svg'
                                alt='Location icon'
                                width={17}
                                height={17}
                            />
                            100% Remote
                        </button>
                        <button
                            className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                        >
                            <Image
                                src='/icons/alarm.svg'
                                alt='Alarm clock icon'
                                width={17}
                                height={17}
                            />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <div className='text-[25px] font-[200]'>
                        Marketing Executive
                    </div>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We&apos;re looking for a mid-level product designer to
                        join our team.
                    </div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property
                        is not just about financial gains. That&apos;s why, we
                        go the extra mile to provide our clients with a hassle
                        free customer-centric journey that ensures comfort from
                        A to Z. Our after sales experience extends far and
                        beyond regular sales to create a long withstanding
                        relationship with our clients where trust and
                        credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px] text-xs'>
                            <Image
                                src='/icons/location.svg'
                                alt='Location icon'
                                width={17}
                                height={17}
                            />
                            100% Remote
                        </button>
                        <button
                            className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                        >
                            <Image
                                src='/icons/alarm.svg'
                                alt='Alarm clock icon'
                                width={17}
                                height={17}
                            />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <div className='text-[25px] font-[200]'>
                        Marketing Executive
                    </div>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We&apos;re looking for a mid-level product designer to
                        join our team.
                    </div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property
                        is not just about financial gains. That&apos;s why, we
                        go the extra mile to provide our clients with a hassle
                        free customer-centric journey that ensures comfort from
                        A to Z. Our after sales experience extends far and
                        beyond regular sales to create a long withstanding
                        relationship with our clients where trust and
                        credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px] text-xs'>
                            <Image
                                src='/icons/location.svg'
                                alt='Location icon'
                                width={17}
                                height={17}
                            />
                            100% Remote
                        </button>
                        <button
                            className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                        >
                            <Image
                                src='/icons/alarm.svg'
                                alt='Alarm clock icon'
                                width={17}
                                height={17}
                            />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <div className='text-[25px] font-[200]'>
                        Marketing Executive
                    </div>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We&apos;re looking for a mid-level product designer to
                        join our team.
                    </div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property
                        is not just about financial gains. That&apos;s why, we
                        go the extra mile to provide our clients with a hassle
                        free customer-centric journey that ensures comfort from
                        A to Z. Our after sales experience extends far and
                        beyond regular sales to create a long withstanding
                        relationship with our clients where trust and
                        credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px] text-xs'>
                            <Image
                                src='/icons/location.svg'
                                alt='Location icon'
                                width={17}
                                height={17}
                            />
                            100% Remote
                        </button>
                        <button
                            className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                        >
                            <Image
                                src='/icons/alarm.svg'
                                alt='Alarm clock icon'
                                width={17}
                                height={17}
                            />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60 pb-[35px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <div className='text-[25px] font-[200]'>
                        Marketing Executive
                    </div>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We&apos;re looking for a mid-level product designer to
                        join our team.
                    </div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property
                        is not just about financial gains. That&apos;s why, we
                        go the extra mile to provide our clients with a hassle
                        free customer-centric journey that ensures comfort from
                        A to Z. Our after sales experience extends far and
                        beyond regular sales to create a long withstanding
                        relationship with our clients where trust and
                        credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px] text-xs'>
                            <Image
                                src='/icons/location.svg'
                                alt='Location icon'
                                width={17}
                                height={17}
                            />
                            100% Remote
                        </button>
                        <button
                            className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                        >
                            <Image
                                src='/icons/alarm.svg'
                                alt='Alarm clock icon'
                                width={17}
                                height={17}
                            />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                    active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div className='mt-[30px] w-full text-[40px] font-[700] leading-[38px] lg:mt-[65px] small:text-[69px] small:leading-[88px]'>
                <h2>
                    Apply
                    <br />
                    Now
                </h2>
            </div>
            <EnquireForm />
        </div>
    );
}
