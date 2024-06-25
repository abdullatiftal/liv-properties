import '@/app/ui/index.css'
import Image from 'next/image'
import Link from 'next/link'
import { HomeHero, FeaturedProperties, OurServices, Instagram, ScrollingSections } from '@/app/components'

export default async function Page() {
    return (
        <div className='flex flex-col items-center gap-[59px] sm:gap-[160px] overflow-hidden sm:overflow-auto relative sm:static px-[3vw] sm:px-[0] w-[100dvw] sm:w-full'>
            <Link href='/' className='fixed right-[85px] bottom-[60px] z-20'>
                <Image src='/icons/whatsapp.svg' alt='Whatsapp icon' width={50} height={50}
                className='p-1 rounded-full hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out' />
            </Link>
            <ScrollingSections />
        </div>
    )
}
