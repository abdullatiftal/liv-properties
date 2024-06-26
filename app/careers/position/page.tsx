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
                <h1>Careers</h1>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <h2 className='text-[25px] font-[200]'>
                        Marketing Executive
                    </h2>
                    <div className='mt-[7px] text-[20px] font-[200]'>
                        We’re looking for a mid-level product designer to join
                        our team.
                    </div>
                    <div className='mt-[38px] flex gap-[15px]'>
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
                    <p className='mt-[38px] text-xs leading-[162%]'>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of
                        &quot;de Finibus Bonorum et Malorum&quot; (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC. This book
                        is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum,
                        &quot;Lorem ipsum dolor sit amet..&quot;, comes from a
                        line in section 1.10.32.
                    </p>
                    <p className='mt-[20px] text-xs leading-[162%]'>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of
                        &quot;de Finibus Bonorum et Malorum&quot; (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC. This book
                        is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum,
                        &quot;Lorem ipsum dolor sit amet..&quot;, comes from a
                        line in section 1.10.32.
                    </p>
                </div>
                {/* <Link href={`/careers/position?id=marketing-executive`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-row items-center sm:flex-col sm:items-end text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                    active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' className='ml-[20px] sm:ml-0 order-2 sm:order-1 w-[30px] sm:w-full' alt='Outward arrow' width={48} height={48} />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link> */}
            </div>
            <div className='mt-[30px] w-full text-[40px] font-[700] leading-[38px] lg:mt-[65px] small:text-[69px] small:leading-[88px]'>
                <h2>
                    Apply
                    <br />
                    Now
                </h2>
            </div>
            <EnquireForm hasUploadField />
        </div>
    );
}
