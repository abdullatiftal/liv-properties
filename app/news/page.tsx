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
            <button type="submit" className='block mt-[23px] mx-auto px-[16px] py-[9px] rounded-3xl border border-solid border-[#EDDFD0] text-xs hover:bg-white/30
                active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                22 - 10 - 2024
            </button>
            <div className='mt-[14px] pb-[31px] text-xs border-b border-solid border-[#EDDFD0] border-opacity-50'>
                At Slim Property, we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
            </div>
            <div className='mt-[46px] pb-[34px] flex flex-wrap border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image src='/images/property.jpg' alt='Property' width={304} height={293} />
                    </Link>
                    <div className='mt-[15px] ml-[10px]'>
                        <div className=' text-[15px] font-[700]'>In publishing and graphic design, Lorem ipsum is a placeholder text ...</div>
                        <div className='text-xs'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of</div>
                    </div>
                </div>
                <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image src='/images/property.jpg' alt='Property' width={304} height={293} />
                    </Link>
                    <div className='mt-[15px] ml-[10px]'>
                        <div className=' text-[15px] font-[700]'>In publishing and graphic design, Lorem ipsum is a placeholder text ...</div>
                        <div className='text-xs'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of</div>
                    </div>
                </div>
                <div className={`${s.propPic} mt-[43px] w-[304px]`}>
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image src='/images/property.jpg' alt='Property' width={304} height={293} />
                    </Link>
                    <div className='mt-[15px] ml-[10px]'>
                        <div className=' text-[15px] font-[700]'>In publishing and graphic design, Lorem ipsum is a placeholder text ...</div>
                        <div className='text-xs'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of</div>
                    </div>
                </div>
                <div className={`mt-[43px] w-[304px]`}>
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image src='/images/property.jpg' alt='Property' width={304} height={293} />
                    </Link>
                    <div className='mt-[15px] ml-[10px]'>
                        <div className=' text-[15px] font-[700]'>In publishing and graphic design, Lorem ipsum is a placeholder text ...</div>
                        <div className='text-xs'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
