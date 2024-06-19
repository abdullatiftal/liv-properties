import Image from 'next/image'
import { InvestmentAdvisory, Instagram } from '@/app/components'
import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'

export default async function ServicesPage() {
    return (
        <div className='mb-[84px]'>
            <div className="mb-[82px] relative min-[1630px]:min-w-[1440px] max-[1629px]:w-full">
                <div className='gotham text-[50px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Our</div>
                    <div>Services</div>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] pointer-events-none'>
                        <Image src='/images/services_building.webp' alt='Home' width={1404} height={885} />
                    </div>
                </div>
            </div>
            <div className='gotham'>
                <div className='sm:w-[480px] text-[25px] mt-[11px] font-[200] leading-[120%]'>
                    <div>A comprehensive investment experience tailored to high-end needs</div>
                </div>
            </div>
            <div className="mb-[48px] max-w-[100%]">
                <div className='flex flex-wrap gap-x-2 gap-y-14 mt-[35px] pb-[37px] xs border-b border-solid border-[#EDDFD0] border-opacity-50'>
                    <div className={`${s.serviceBlock} relative sm:w-[380px]`}>
                        <div className='text-[20px]'>Sales</div>
                        <div className='mt-[20px] text-white text-xs leading-[170%]'>
                            <div>Slim Property team of professional agents boast a</div>
                            <div>strategic mindset, powered by a pool of high-end</div>
                            <div>properties — in collaboration with top developers and</div>
                            <div>investors- which allows them to identify the best</div>
                            <div>investment opportunity on your behalf, ensuring that</div>
                            <div>every effort is focused and purposeful. Armed with deep</div>
                            <div>market knowledge, they are able to listen attentively to</div>
                            <div>clients’ needs, tailoring solutions in a way that truly adds</div>
                            <div>value.</div>
                        </div>
                    </div>
                    <div className={`${s.serviceBlock} relative sm:w-[380px]`}>
                        <div className='text-[20px]'>Current Services</div>
                        <div className='mt-[20px] text-white text-xs leading-[170%]'>

                            <div>Residential Real Estate Investment Advisory</div>
                            <div>(Primary and Resale)</div>
                            <div>Residential Real Estate Resale</div>
                            <div>Property Management</div>
                            <div>Commercial Real estate leasing and sale</div>
                        </div>
                    </div>
                    <div className={`sm:w-[380px]`}>
                        <div className='text-[20px]'>After Sales</div>
                        <div className='mt-[20px] text-white text-xs leading-[170%]'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of customer satisfaction beyond the initial transaction. Their commitment to building strong relationships with customers is unwavering, as they strive to provide seamless post- purchase support.</div>
                    </div>
                </div>
                <InvestmentAdvisory />
            </div>
            <Instagram />
        </div>
    )
}
