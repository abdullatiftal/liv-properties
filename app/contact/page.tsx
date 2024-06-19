import Image from 'next/image'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import '@/app/ui/index.css'
import { EnquireForm } from '@/app/components'
import { gmapsApiKey } from '@/app/constants'


export default async function Contact() {
    return (
        <div className='mb-[84px]'>
            <div className="mb-[82px] relative min-[1630px]:min-w-[1440px] max-[1629px]:w-full">
                <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Contact</div>
                    <div>Us</div>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] pointer-events-none'>
                        <Image src='/images/contact_building.webp' alt='Home' width={1404} height={885} />
                    </div>
                </div>
            </div>
            <div className='mt-[120px] mb-[30px] pb-[43px] flex flex-wrap gap-[75px] border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='sm:ml-[78px] w-[252px] text-sm leading-[29px]'>
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
                <div className='w-full max-[890px]-w-[872px]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={366}
                        width="100%"
                        mode="place"
                        q="1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates"
                    />
                </div>
            </div>
            <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                <div>Enquire</div>
                <div>Now</div>
            </div>
            <EnquireForm/>
        </div>
    )
}
