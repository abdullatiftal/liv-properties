import Image from 'next/image'
import Link from 'next/link'
import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'
import styles from '@/app/ui/home.module.css'
import { Year, FooterEmailForm } from '@/app/components'

export const Footer = () => {
    return (
        <footer className={`relative min-[1440px]-h-[477px] bg-cover max-[639px]:bg-bottom`} style={{ backgroundImage: 'url("/images/ft-bg.jpeg")' }}>
            <div className={` ${styles.tint}`}></div>
            <div className='z-50 relative px-[3vw] sm:px-[80px] pt-[91px] flex flex-wrap gap-y-10 gap-x-2'>
                <div className='max-w-full'>
                    <div className='sm:w-[391px] gotham text-[25px] font-[200] leading-[164%]'>A World of Leading Expertise Exclusively yours</div>
                    <div className='sm:w-[508px] mt-[38px] text-[25px] font-[500] leading-[147%]'>Sign up for our newsletter to stay updated with what’s new in UAE real estate</div>
                    <FooterEmailForm/>
                </div>
                <div className='sm:ml-[67px] max-[639px]:w-full text-sm font-[200]'>
                    <div className='font-[700]'>EXPLORE RESIDENTIAL IN</div>
                    <div className='mt-[7px]'>Palm Jumeirah</div>
                    <div className='mt-[6px]'>Jumeirah Beach Residence</div>
                    <div className='mt-[6px]'>Dubai Marina</div>
                    <div className='mt-[6px]'>Downtown Dubai</div>
                    <div className='mt-[6px]'>Business Bay</div>
                    <div className='mt-[6px]'>Dubai Hills</div>
                    <div className='mt-[6px]'>City Walk</div>
                </div>
                <div className='sm:ml-[67px] max-[639px]:w-full text-sm font-[200]'>
                    <div className='font-[700]'>SLIM PROPERTY</div>
                    <Link href='/about' className={`mt-[7px] block w-fit ${s.hoverable}`}>About us</Link>
                    <Link href='/services' className={`mt-[6px] block w-fit ${s.hoverable}`}>Services</Link>
                    <Link href='/invest' className={`mt-[6px] block w-fit ${s.hoverable}`}>Investment</Link>
                    <Link href='/sell' className={`mt-[6px] block w-fit ${s.hoverable}`}>Sell your property</Link>
                    <Link href='/careers' className={`mt-[6px] block w-fit ${s.hoverable}`}>Careers</Link>
                    <Link href='/news' className={`mt-[6px] block w-fit ${s.hoverable}`}>Blogs & news</Link>
                    <Link href='/contact' className={`mt-[6px] block w-fit ${s.hoverable}`}>Contact us</Link>
                </div>
                <div className='sm:ml-[78px] w-[252px] text-sm font-[200]'>
                    <Image src='/logos/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
                    <div className='mt-[53px]'>Office 304, Bay Square 11, Business Bay, Dubai, UAE</div>
                    <div className='mt-[6px]'>Ph: +971 04 111 1111</div>
                    <div className='mt-[6px]'>Email: info@example.com</div>
                    <div className='mt-[13px] flex'>
                        <Image src='/icons/fb.svg' alt='Facebook icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/x.svg' alt='X icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/instagram.svg' alt='Instagram icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/linkedin.svg' alt='Linkedin icon' width={13} height={13} className='w-[13px] h-[13px]' />
                    </div>
                </div>
            </div>
            <div className={`${styles.footerLine} mt-[40px] font-[200]`}></div>
            <div className='mt-[26px] ml-[3vw] pb-6 sm:pb-12 sm:ml-[80px] w-[calc(100%-3vw)] sm:w-[calc(100%-160px)] flex justify-between gap-x-5 gap-y-1 max-[639px]:flex-wrap text-sm font-[200]'>
                <div className={`${styles.designedBy}`}>Designed & Developed By Cheval</div>
                <div className={`${styles.copyright}`}>© <Year /> Slim Properties. All rights reserved</div>
            </div>
        </footer>
    )
}
