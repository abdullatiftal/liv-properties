import styles from '@/app/ui/home.module.css'
import Link from 'next/link'


export const InvestmentAdvisory = () => {
    return (
        <Link href='/invest'>
            <div className={`relative z-[-1] max-w-[1140px] xl:w-[1154px] sm:h-[230px] px-[41px] pt-[26px] sm:pt-[56px] pb-[29px] bg-cover text-white`}
                style={{ backgroundImage: 'url(/images/services-bg.jpg)' }}>
                <div className={styles.tint}></div>
                <div className='z-10 relative leading-[123%] text-[20px] sm:text-[38px]'>Personalised Investment Advisory</div>
                <div className='z-10 relative max-[639px]:mt-[8px] sm:w-[480px] leading-[21px] sm:leading-[2.4] font-[200] max-[639px[:text-sm'>Connect with us for a comprehensive real estate investment experience tailored to high end needs</div>
            </div>
        </Link>
    )
}
