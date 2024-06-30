import Image from 'next/image';
import '@/app/ui/index.css';
import { HomeSearch } from '@/app/components';
import s from '@/app/ui/main.module.css';
import { Home } from '../types';
// import { useAPI } from '../context/APIContext'

interface HomeHeroProps {
    home: Home
}

export const HomeHero: React.FC<HomeHeroProps> = ({home}) => {
    const imageSrc = home?.['section-1'][1].field_value ?? '/images/car-home.webp';
    const imageAlt = home?.['section-1'][0].field_value ?? 'Timeless luxury re-imagined';

    return (
        <div className='min-[1630px]:min-w-[1440px] max-[1629px]:w-full verticalPanelInner flex h-full flex-col justify-between overflow-hidden lg:pb-[50px] xl:pb-[60px] small:pb-[40px]'>
            <div className='home-sec_title relative z-[2] flex w-[100vw] text-[50px] font-[700] leading-[43px] small:text-[85px] small:leading-[88px]'>
                <div className='px-[3vw] sm:px-0 small:px-[85px]'>
                    <h1 className='max-[767px]:ml-[3vw] inline-block custom-wordbreak'>{home?.['section-1'][0].field_value}</h1>
                </div>
            </div>
            <HomeSearch />
            <div className='max-[767px]:pb-[90px] max-[767px]:left-[0] min-[2200px]:bottom-[0] absolute right-0 top-[150px] z-[1] sm:top-[unset] msm:top-[unset] small:bottom-[90px]'>
                <div className='pointer-events-none relative scale-[1.8] sm:scale-[1]'>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1404}
                        height={885}
                        className='max-[1366px]:w-[90dvw] w-[100dvw] 4xlh:w-[100dvw] 4xlh:origin-bottom-right 4xlh:scale-[1.5]'
                    />
                    <Image
                        src='/images/cloud1.webp'
                        alt='Cloud one'
                        width={623}
                        height={352}
                        className={`${s.cloud1} absolute right-0 top-[10%] z-[-50] max-w-[50%] 4xlh:top-[-10%]`}
                    />
                    <Image
                        src='/images/cloud2.webp'
                        alt='Cloud two'
                        width={513}
                        height={267}
                        className={`${s.cloud2} absolute right-0 top-[30%] z-[-50] max-w-[50%] 4xlh:top-[-30%]`}
                    />
                </div>
            </div>
        </div>
    );
};
