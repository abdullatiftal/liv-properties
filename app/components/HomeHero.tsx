import Image from 'next/image'
import '@/app/ui/index.css'
import { HomeSearch } from '@/app/components'
import s from '@/app/ui/main.module.css'
// import { useAPI } from '../context/APIContext'

export const HomeHero = () => {
    // const { token, properties } = useAPI();
    // console.log("Properties:" + properties);
    // console.log("Token:" + token);
    return (
        <div className="min-[1630px]:min-w-[1440px] max-[1629px]:w-full h-full verticalPanelInner flex flex-col justify-between small:pb-[40px] lg:pb-[50px] xl:pb-[60px] overflow-hidden">
            <div className='w-[100vw] relative home-sec_title text-[50px] small:text-[85px] leading-[43px] small:leading-[88px] font-[700] flex z-[2]'>
                <div className='px-[3vw] sm:px-0 small:px-[85px]'>
                    <h1 className='max-[767px]:ml-[3vw]'>Timeless<br />
                    luxury<br />
                    re-imagined</h1>
                </div>
            </div>
            <HomeSearch />
            <div className='max-[767px]:pb-[90px] max-[767px]:left-[0] right-0 absolute top-[150px] msm:top-[unset] sm:top-[unset] small:bottom-[90px] min-[2200px]:bottom-[0] z-[1]'>
                <div className='relative scale-[1.8] sm:scale-[1] pointer-events-none'>
                    <Image src='/images/car-home.webp' alt='Home and a car' width={1404} height={885} className='max-[1366px]:w-[90dvw] w-[100dvw] 4xlh:w-[100dvw] 4xlh:origin-bottom-right 4xlh:scale-[1.5]' />
                    <Image src='/images/cloud1.webp' alt='Cloud one' width={623} height={352} className={`${s.cloud1} z-[-50] absolute 4xlh:top-[-10%] top-[10%] right-0 max-w-[50%]`} />
                    <Image src='/images/cloud2.webp' alt='Cloud two' width={513} height={267} className={`${s.cloud2} z-[-50] absolute 4xlh:top-[-30%] top-[30%] right-0 max-w-[50%]`} />
                </div>
            </div>
        </div>
    )
}
