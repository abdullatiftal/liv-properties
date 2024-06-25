import styles from '@/app/ui/home.module.css'
import Link from 'next/link'


export const InvestmentAdvisory = () => {
    return (
        <Link href='/invest' className='services-cta'>
            <div className={`relative z-[-1] w-full xl:w-[1100px] bg-cover text-white`}
                style={{ backgroundImage: 'url(/images/services-bg.jpg)' }}>
                <div className={styles.tint}></div>
                <div className='z-10 relative leading-[123%] text-[28px] small:text-[38px]'>Personalised Investment Advisory</div>
                <div className='z-10 relative max-[639px]:mt-[8px] small:w-[480px] leading-[21px] small:leading-[2] font-[200] max-[639px[:text-sm'>Connect with us for a comprehensive real estate investment experience tailored to high end needs</div>
            </div>
        </Link>
    )
}
