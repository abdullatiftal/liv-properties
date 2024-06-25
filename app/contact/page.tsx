import Image from 'next/image'
import '@/app/ui/index.css'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { EnquireForm } from '@/app/components'
import { gmapsApiKey } from '@/app/constants'


export default async function Contact() {
    return (
        <div className='mb-[30px] sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px] w-full'>
            <div className="relative 3xl:max-w-[1200px] w-full">
            <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                <h2>Contact<br/>Us</h2>
                <div className='z-[-30] absolute top-[50%] translate-y-[-30%] sm:translate-y-[-60%] md:translate-y-[-60%] xl:translate-y-[-70%] scale-[1.6] md:scale-[1.4] xl:scale-[1.2] 2xl:scale-[1.1] pointer-events-none'>
                        <Image src='/images/contact_building.webp' alt='Home' width={1404} height={885} />
                    </div>
                </div>
            </div>
            <div className='mt-[30px] md:mt-[80px] lg:mt-[120px] mb-[30px] pb-[43px] flex flex-wrap lg:flex-wrap justify-between items-center gap-[50px] lg:gap-[0px] border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='w-[252px] lg:w-[calc(30%-25px)] text-sm leading-[29px]'>
                    <div className='mt-[53px] sm:mt-[0px]'>Office 304, Bay Square 11, Business Bay, Dubai, UAE</div>
                    <div className='mt-[6px]'>Ph: +971 04 111 1111</div>
                    <div className='mt-[6px]'>Email: info@example.com</div>
                    <div className='mt-[13px] flex'>
                        <Image src='/icons/fb.svg' alt='Facebook icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/x.svg' alt='X icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/instagram.svg' alt='Instagram icon' width={13} height={13} className='mr-[13px] w-[13px] h-[13px]' />
                        <Image src='/icons/linkedin.svg' alt='Linkedin icon' width={13} height={13} className='w-[13px] h-[13px]' />
                    </div>
                </div>
                <div className='w-full lg:w-[calc(70%-25px)]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={366}
                        width="100%"
                        mode="place"
                        q="1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates"
                    />
                </div>
            </div>
            <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                <h2>Enquire<br/>Now</h2>
            </div>
            <EnquireForm/>
        </div>
    )
}
