import '@/app/ui/index.css'
import Image from 'next/image'
import { Instagram, WhoWeAre } from '@/app/components'

export default async function AboutPage() {
    return (
        <div className='3xl:max-w-[1200px] w-full mx-auto'>
            <div className="relative 3xl:max-w-[1200px] w-full mx-auto">
                <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                    <h2>Who we<br/>are</h2>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] scale-[1.4] md:scale-[1.3] lg:scale-[1.2] pointer-events-none'>
                        <Image src='/images/aboutus-bulding.webp' alt='Home and a car' width={1404} height={885} />
                    </div>
                </div>
            </div>
            <WhoWeAre />
            
            <div className='mt-[50px] mb-[30px] sm:mb-[60px] flex flex-wrap'>
                <Instagram />
            </div>
        </div>
    )
}
