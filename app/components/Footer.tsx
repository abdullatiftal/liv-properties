import Image from 'next/image'
import Link from 'next/link'
import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'
import styles from '@/app/ui/home.module.css'
import { Year, FooterEmailForm } from '@/app/components'

export const Footer = () => {
    return (
        <footer className={`relative min-[1440px]-h-[477px] bg-cover max-[639px]:bg-bottom`} style={{ backgroundImage: 'url("/images/ft-bg.jpeg")' }}>
            <div className={`z-[1] ${styles.tint} z-[1]`}></div>
            <div className='z-[2] relative px-[3vw] sm:px-[80px] pt-[40px] lg:pt-[80px] flex gap-y-[30px] small:gap-y-[50px] gap-x-[30px] flex-wrap bigtab:flex-nowrap sm:justify-between'>
                <div className='max-w-full w-[100%] bigtab:w-[40%] bigtab:mr-[6%] order-1'>
                    <h2 className='gotham text-[20px] sm:text-[25px] font-[200] leading-[164%] xl:max-w-[80%] mr-auto'>A World of Leading Expertise Exclusively yours</h2>
                    <h3 className='mt-[5px] xl:mt-[38px] text-[20px] sm:text-[25px] font-[400] leading-[147%] xl:max-w-[90%] mr-auto'>Sign up for our newsletter to stay updated with what’s new in UAE real estate</h3>
                    <FooterEmailForm/>
                </div>
                <div className='max-[639px]:w-full text-sm font-[200] sm:w-[calc(30%-20px)] bigtab:w-[15%] xl:w-[18%] order-2'>
                    <div className='font-[700]'>EXPLORE RESIDENTIAL IN</div>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Palm Jumeirah</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Jumeirah Beach Residence</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Dubai Marina</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Downtown Dubai</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Business Bay</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>Dubai Hills</Link>
                    <Link href='/' className={`mt-[7px] block w-fit ${s.hoverable}`}>City Walk</Link>
                </div>
                <div className='max-[639px]:w-full text-sm font-[200] sm:w-[calc(30%-20px)] bigtab:w-[15%] xl:w-[18%] order-3'>
                    <div className='font-[700]'>SLIM PROPERTY</div>
                    <Link href='/about' className={`mt-[7px] block w-fit ${s.hoverable}`}>About us</Link>
                    <Link href='/services' className={`mt-[6px] block w-fit ${s.hoverable}`}>Services</Link>
                    <Link href='/invest' className={`mt-[6px] block w-fit ${s.hoverable}`}>Investment</Link>
                    <Link href='/sell' className={`mt-[6px] block w-fit ${s.hoverable}`}>Sell your property</Link>
                    <Link href='/careers' className={`mt-[6px] block w-fit ${s.hoverable}`}>Careers</Link>
                    <Link href='/news' className={`mt-[6px] block w-fit ${s.hoverable}`}>Blogs & news</Link>
                    <Link href='/contact' className={`mt-[6px] block w-fit ${s.hoverable}`}>Contact us</Link>
                </div>
                <div className='text-sm font-[200] sm:w-[calc(40%-20px)] bigtab:w-[20%] order-4'>
                    <Image src='/logos/slim.svg' alt='Slim Properties logo' width={142} height={71} className='ml-[-4px]' />
                    <div className='mt-[30px] xl:mt-[53px]'>Office 304, Bay Square 11, Business Bay, Dubai, UAE</div>
                    <div className='mt-[6px]'>Ph: <Link href='tel:971041111111' target='_blank'>+971 04 111 1111</Link></div>
                    <div className='mt-[6px]'>Email: <Link href='mailto:info@example.com' target='_blank'>info@example.com</Link></div>
                    <div className='mt-[13px] flex'>
                        <Link href='/'><Image src='/icons/fb.svg' alt='Facebook icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' /></Link>
                        <Link href='/'><Image src='/icons/x.svg' alt='X icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' /></Link>
                        <Link href='/'><Image src='/icons/instagram.svg' alt='Instagram icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' /></Link>
                        <Link href='/'><Image src='/icons/linkedin.svg' alt='Linkedin icon' width={13} height={13} className='w-[13px] h-[13px]' /></Link>
                    </div>
                </div>
            </div>
            <div className={`${styles.footerLine} z-[2] mt-[40px] font-[200] relative`}></div>
            <div className='z-[2] mt-[26px] ml-[3vw] pb-[26px] sm:ml-[80px] w-[calc(100%-3vw)] sm:w-[calc(100%-160px)] flex justify-between gap-x-5 gap-y-1 max-[639px]:flex-wrap text-sm font-[200] relative'>
                <div className={`${styles.designedBy}`}>Designed & Developed By Cheval</div>
                <div className={`${styles.copyright}`}>© <Year /> Slim Properties. All rights reserved</div>
            </div>
        </footer>
    )
}
