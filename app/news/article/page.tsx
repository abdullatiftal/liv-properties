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
            <p className='mt-[14px] text-xs'>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the
                theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                comes from a line in section 1.10.32.
            </p>
            <p className='mt-[14px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[31px] text-xs'>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
                Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil)
                by Cicero, written in 45 BC. This book is a treatise on the
                theory of ethics, very popular during the Renaissance. The first
                line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                comes from a line in section 1.10.32.
            </p>
            <div className='mt-[28px] flex justify-between'>
                <button
                    type='submit'
                    className='block rounded-3xl border border-solid border-[#EDDFD0] px-[40px] py-[7px] text-xs transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Back
                </button>
                <button
                    type='submit'
                    className='block rounded-3xl border border-solid border-[#EDDFD0] px-[40px] py-[7px] text-xs transition
                duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                >
                    Next
                </button>
            </div>
        </div>
    );
}
