import '@/app/ui/index.css';
import s from '@/app/ui/main.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default async function NewsPage() {
    return (
        <div className='mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                <h2>News & Events</h2>
            </div>
            <Image
                src='/images/news_building.jpg'
                alt='Building in snow'
                width={1120}
                height={480}
                className='mt-[50px] min-w-full'
            />
            <h3 className='mt-[33px] text-[25px] font-[200]'>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual
            </h3>
            <button
                type='submit'
                className='mr-auto mt-[23px] block rounded-3xl border border-solid border-[#EDDFD0] px-[16px] py-[9px] text-xs transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
            >
                22 - 10 - 2024
            </button>
            <p className='mt-[14px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[31px] text-xs'>
                At Slim Property, we understand that investing in property is
                not just about financial gains. That’s why, we go the extra mile
                to provide our clients with a hassle free customer-centric
                journey that ensures comfort from A to Z. Our after sales
                experience extends far and beyond regular sales to create a long
                withstanding relationship with our clients where trust and
                credibility reign supreme.
            </p>
            <div className='mt-[20px] flex flex-wrap border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[34px] md:mt-[0px]'>
                <div
                    className={`${s.propPic} mt-[20px] w-[300px] md:mt-[43px]`}
                >
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image
                            src='/images/property.jpg'
                            alt='Property'
                            width={300}
                            height={293}
                        />
                    </Link>
                    <div className='ml-[10px] mt-[15px]'>
                        <h3 className=' text-[15px] font-[700]'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ...
                        </h3>
                        <p className='mt-[5px] text-xs'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of
                        </p>
                    </div>
                </div>
                <div
                    className={`${s.propPic} mt-[20px] w-[300px] md:mt-[43px]`}
                >
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image
                            src='/images/property.jpg'
                            alt='Property'
                            width={300}
                            height={293}
                        />
                    </Link>
                    <div className='ml-[10px] mt-[15px]'>
                        <h3 className=' text-[15px] font-[700]'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ...
                        </h3>
                        <p className='mt-[5px] text-xs'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of
                        </p>
                    </div>
                </div>
                <div
                    className={`${s.propPic} mt-[20px] w-[300px] md:mt-[43px]`}
                >
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image
                            src='/images/property.jpg'
                            alt='Property'
                            width={300}
                            height={293}
                        />
                    </Link>
                    <div className='ml-[10px] mt-[15px]'>
                        <h3 className=' text-[15px] font-[700]'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ...
                        </h3>
                        <p className='mt-[5px] text-xs'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of
                        </p>
                    </div>
                </div>
                <div className={`mt-[20px] w-[300px] md:mt-[43px]`}>
                    <Link href={`/news/article?id=test-news-id`}>
                        <Image
                            src='/images/property.jpg'
                            alt='Property'
                            width={300}
                            height={293}
                        />
                    </Link>
                    <div className='ml-[10px] mt-[15px]'>
                        <h3 className=' text-[15px] font-[700]'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ...
                        </h3>
                        <p className='mt-[5px] text-xs'>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
