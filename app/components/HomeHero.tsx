import Image from 'next/image'
import '@/app/ui/index.css'
import { HomeSearch } from '@/app/components'
import s from '@/app/ui/main.module.css'

export const HomeHero = () => {
    return (
        <div className="min-[1630px]:min-w-[1440px] max-[1629px]:w-full verticalPanelInner">
            <div className='w-[100vw] relative gotham text-[50px] md:text-[85px] leading-[43px] md:leading-[88px] font-[700] flex'>
                <div className='px-[3vw] sm:px-[85px]'>
                    <div className='max-[767px]:ml-[3vw]'>Timeless</div>
                    <div className='max-[767px]:ml-[3vw]'>luxury</div>
                    <div className='max-[767px]:ml-[3vw]'>re-imagined</div>
                </div>
                <div className='max-[767px]:pb-[90px] max-[767px]:left-[0] right-0 absolute max-[500px]:top-[1.2%] top-[-1%] lg:top-[-7%] xl:top-[-80%] overflow-x-hidden'>
                    <div className='z-[-30] relative right-0 max-[500px]:top-[1.2%] top-[-1%] lg:top-[-7%] xl:top-[-8%] max-[768px]:scale-[1.8] overflow-hidden pointer-events-none'>
                        <Image src='/images/car-home.webp' alt='Home and a car' width={1404} height={885} />
                        <Image src='/images/cloud1.webp' alt='Cloud one' width={623} height={352}
                            className={`${s.cloud1} z-[-50] absolute top-[10%] right-0 max-w-[50%]`} />
                        <Image src='/images/cloud2.webp' alt='Cloud two' width={513} height={267}
                            className={`${s.cloud2} z-[-50] absolute top-[30%] right-0 max-w-[50%]`} />
                    </div>
                </div>
            </div>
            <HomeSearch />
        </div>
    )
}
