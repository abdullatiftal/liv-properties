import '@/app/ui/index.css'
import { EnquireForm } from '@/app/components'
import Link from 'next/link'
import Image from 'next/image'

export default async function CareersPage() {
    return (
        <div className='mb-[39px]'>
            <div className='pb-[79px] w-full text-start gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]
            border-b border-solid border-[#eddfd0] border-opacity-60'>
                Careers
            </div>
            <div className='mt-[21px] flex flex-wrap sm:flex-nowrap justify-between gap-x-[100px] gap-y-[20px]'>
                <div>
                    <div className='gotham text-[25px] font-[200]'>Marketing Executive</div>
                    <div className='mt-[7px] gotham text-[20px] font-[200]'>We’re looking for a mid-level product designer to join our team.</div>
                    <div className='mt-[38px] flex gap-[15px]'>
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
                    <div className='mt-[38px] text-xs leading-[162%]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                    </div>
                    <div className='mt-[20px] text-xs leading-[162%]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                    </div>
                </div>
                <Link href={`#apply`}>
                    <div className='p-2 h-fit rounded-3xl flex flex-col items-end gotham text-[25px] font-[200] hover:bg-white/30 active:bg-white/60 hover:text-gray-700
                active:text-black transition duration-200 ease-in-out'>
                        <Image src='/icons/arrow_outward.svg' alt='Outward arrow' width={48} height={48} />
                        Apply
                    </div>
                </Link>
            </div>
            <div className='mt-[39px] w-full gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                <div id='apply'>Apply</div>
                <div>Now</div>
            </div>
            <EnquireForm hasUploadField />
        </div>
    )
}
