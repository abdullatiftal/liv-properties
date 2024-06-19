import Image from 'next/image'
import '@/app/ui/index.css'
import { Instagram, WhoWeAre, InvestmentAdvisory } from '@/app/components'

export default async function AboutPage() {
    return (
        <div>
            <div className="relative min-[1630px]:min-w-[1440px] max-[1629px]:w-full">
                <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Who we</div>
                    <div>are</div>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] pointer-events-none'>
                        <Image src='/images/aboutus-bulding.webp' alt='Home and a car' width={1404} height={885} />
                    </div>
                </div>
            </div>
            <WhoWeAre />
            <div className='mt-[47px] pb-[37px] w-full flex flex-wrap gap-[25px] text-xs border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='max-w-[590px]'>
                    <div>
                        Slim Properties was created by an experienced real estate buyer and investor who has been in the regional market for more than 20 years. Slim Property is a boutique agency from a buyers perspective offering a bird’s eye view of the city to provide high- net worth clients with unique investment opportunities that resonate with their sophisticated taste; from urban homes to sprawling estates nestled in serene hideaways, Slim Property supports you in purchasing or investing in the property of your dreams.
                    </div>
                    <div className='mt-[23px]'>
                        Our team of well-trained agents not only possess a profound understanding of the real estate market but also have an innate ability to identify real gems from a buyer’s perspective, guaranteeing investment growth. By adopting a personalized approach while partnering with niche developers in the market, Slim Property provides tailored services to ensure a seamless purchase/re-sale or after sales experience, rooted in in-depth knowledge.
                    </div>
                </div>
                <div className='max-w-[590px]'>
                    At Slim Property , we understand that investing in property is not just about financial gains. That’s why, we go the extra mile to provide our clients with a hassle free customer-centric journey that ensures comfort from A to Z. Our after sales experience extends far and beyond regular sales to create a long withstanding relationship with our clients where trust and credibility reign supreme.
                </div>
            </div>
            <div className='mt-[33px] w-full flex flex-wrap gap-[25px] text-xs'>
                <div className='max-w-[590px]'>
                    <div className='mb-[11px] text-[20px] leading-[120%]'>Mission</div>
                    <div>
                        Providing a comprehensive real estate investment experience that puts unrivaled quality, smart technology and personalized care at its forefront. We support our clients in making informed investment decisions by finding the ideal property that best fits their needs while instilling a strong sense of partnership, thanks to consistency, credibility and extensive market expertise.
                    </div>
                </div>
                <div className='max-w-[590px]'>
                    <div className='mb-[11px] text-[20px] leading-[120%]'>Vision</div>
                    <div>
                        Becoming the leading boutique real estate agency of choice in the UAE while setting ourselves as a trusted high end luxury property advisor that not only caters to the diverse needs of high net worth clients, but also exceed expectations in every step of the purchase and after-sales cycle
                    </div>
                </div>
            </div>
            <InvestmentAdvisory/>
            <div className='mt-[36px]'>
                <div className='gotham text-[40px] sm:text-[69px] leading-[88px] font-[700]'>
                    Meet The Team
                </div>
                <div className='mt-[47px] flex flex-wrap gap-[14px]'>
                    <div>
                        <Image src='/images/team_member.png' alt='Photo of Tim' width={261} height={319} className='border border-solid border-[#EDDFD0] border-opacity-50' />
                        <div className='mt-[11px] text-[23px] font-[700]'>John Doe</div>
                        <div className='text-xs'>CEO & Founder</div>
                        <div className='mt-[10px] w-[28px] h-[3px] bg-[#EDDFD0]' />
                    </div>
                    <div>
                        <Image src='/images/team_member.png' alt='Photo of Tim' width={261} height={319} className='border border-solid border-[#EDDFD0] border-opacity-50' />
                        <div className='mt-[11px] text-[23px] font-[700]'>John Doe</div>
                        <div className='text-xs'>CEO & Founder</div>
                        <div className='mt-[10px] w-[28px] h-[3px] bg-[#EDDFD0]' />
                    </div>
                    <div>
                        <Image src='/images/team_member.png' alt='Photo of Tim' width={261} height={319} className='border border-solid border-[#EDDFD0] border-opacity-50' />
                        <div className='mt-[11px] text-[23px] font-[700]'>John Doe</div>
                        <div className='text-xs'>CEO & Founder</div>
                        <div className='mt-[10px] w-[28px] h-[3px] bg-[#EDDFD0]' />
                    </div>
                    <div>
                        <Image src='/images/team_member.png' alt='Photo of Tim' width={261} height={319} className='border border-solid border-[#EDDFD0] border-opacity-50' />
                        <div className='mt-[11px] text-[23px] font-[700]'>John Doe</div>
                        <div className='text-xs'>CEO & Founder</div>
                        <div className='mt-[10px] w-[28px] h-[3px] bg-[#EDDFD0]' />
                    </div>
                    <div>
                        <Image src='/images/team_member.png' alt='Photo of Tim' width={261} height={319} className='border border-solid border-[#EDDFD0] border-opacity-50' />
                        <div className='mt-[11px] text-[23px] font-[700]'>John Doe</div>
                        <div className='text-xs'>CEO & Founder</div>
                        <div className='mt-[10px] w-[28px] h-[3px] bg-[#EDDFD0]' />
                    </div>
                </div>
            </div>
            <div className='mt-[50px] mb-[68px] flex flex-wrap'>
                <Instagram />
            </div>
        </div>
    )
}
