import '@/app/ui/index.css'
import { EnquireForm } from '@/app/components'
import Link from 'next/link'
import Image from 'next/image'

export default async function CareersPage() {
    return (
        <>
            <div className='pb-[79px] w-full text-start gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]
                border-b border-solid border-[#eddfd0] border-opacity-60'>
                Careers
            </div>
            <div className='mt-[21px] pb-[35px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] text-xs'>
                            <Image src='/icons/location.svg' alt='Location icon' width={17} height={17} />
                            100% Remote
                        </button>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/alarm.svg' alt='Alarm clock icon' width={17} height={17} />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] pb-[35px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/location.svg' alt='Location icon' width={17} height={17} />
                            100% Remote
                        </button>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/alarm.svg' alt='Alarm clock icon' width={17} height={17} />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] pb-[35px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/location.svg' alt='Location icon' width={17} height={17} />
                            100% Remote
                        </button>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/alarm.svg' alt='Alarm clock icon' width={17} height={17} />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] pb-[35px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/location.svg' alt='Location icon' width={17} height={17} />
                            100% Remote
                        </button>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/alarm.svg' alt='Alarm clock icon' width={17} height={17} />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[21px] pb-[35px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px] border-b border-solid border-[#eddfd0] border-opacity-60'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[10px] text-xs leading-[162%]'>
                        At Liv Squared, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                    </div>
                    <div className='mt-[19px] flex gap-[15px]'>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/location.svg' alt='Location icon' width={17} height={17} />
                            100% Remote
                        </button>
                        <button className='px-[16px] pt-[10px] pl-[13px] pb-[10px] flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0]
                            text-xs hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/alarm.svg' alt='Alarm clock icon' width={17} height={17} />
                            Full Time
                        </button>
                    </div>
                </div>
                <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[65px] w-full gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                <div>Apply</div>
                <div>Now</div>
            </div>
            <EnquireForm />
        </>
    )
}
