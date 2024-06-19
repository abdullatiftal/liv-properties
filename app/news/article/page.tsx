import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default async function NewsPage() {
    return (
        <div className=' mb-[70px]'>
            <div className='gotham text-[40px] sm:text-[69px] leading-[123%] font-[700]'>News & Events</div>
            <Image src='/images/news_building.jpg' alt='Building in snow' width={1120} height={480} className='mt-[50px] max-w-full' />
            <div className='gotham mt-[33px] text-[25px] font-[200]'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
            </div>
            <button type='submit' className='block mt-[23px] px-[16px] py-[9px] rounded-3xl border border-solid border-[#EDDFD0] text-xs hover:bg-white/30
                active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                22 - 10 - 2024
            </button>
            <div className='mt-[14px] text-xs'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
            </div>
            <div className='mt-[14px] text-xs'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
            </div>
            <div className='mt-[28px] flex justify-between'>
                <button type='submit' className='block px-[40px] py-[7px] rounded-3xl border border-solid border-[#EDDFD0] text-xs hover:bg-white/30
                active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Back
                </button>
                <button type='submit' className='block px-[40px] py-[7px] rounded-3xl border border-solid border-[#EDDFD0] text-xs hover:bg-white/30
                active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Next
                </button>
            </div>
        </div>
    )
}
