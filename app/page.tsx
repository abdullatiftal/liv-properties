import '@/app/ui/index.css';
import Image from 'next/image';
import Link from 'next/link';
import {
    HomeHero,
    FeaturedProperties,
    OurServices,
    Instagram,
    ScrollingSections
} from '@/app/components';

export default async function Page() {
    return (
        <div className='relative flex w-[100dvw] flex-col items-center gap-[59px] overflow-hidden px-[3vw] sm:static sm:w-full sm:gap-[160px] sm:overflow-auto sm:px-[0]'>
            <Link href='/' className='fixed bottom-[60px] right-[85px] z-20'>
                <Image
                    src='/icons/whatsapp.svg'
                    alt='Whatsapp icon'
                    width={50}
                    height={50}
                    className='rounded-full p-1 transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                />
            </Link>
            <ScrollingSections />
        </div>
    );
}
