import '@/app/ui/index.css'
import Image from 'next/image'
import { HomeHero, FeaturedProperties, OurServices, Instagram, ScrollingSections } from '@/app/components'

export default async function Page() {
    return (
        <div className='flex flex-col items-center gap-[59px] sm:gap-[160px] w-full'>
            <Image src='/icons/whatsapp.svg' alt='Whatsapp icon' width={50} height={50}
                className='fixed right-[4vw] bottom-[9vh] p-1 rounded-full hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out z-10' />
            <ScrollingSections />
        </div>
    )
}
