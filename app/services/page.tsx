import Image from 'next/image'
import { InvestmentAdvisory, Instagram } from '@/app/components'
import '@/app/ui/index.css'
import s from '@/app/ui/main.module.css'

export default async function ServicesPage() {
    return (
        <div className='mb-[30px] sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px] w-full mx-auto'>
            <div className="mb-[82px] relative min-[1630px]:min-w-[1440px] max-[1629px]:w-full">
                <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                    <h2>Our<br/>Services</h2>
                    <div className='z-[-30] absolute top-[50%] translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-60%] xl:translate-y-[-70%] scale-[1.4] md:scale-[1.3] lg:scale-[1.3] 2xl:scale-[1.4] pointer-events-none'>
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
                <div className='flex flex-wrap flex-col md:flex-row sm:gap-x-[30px] xl:gap-x-[60px] 3xl:gap-x-2 gap-y-[20px] md:gap-y-14 justify-between xl:justify-normal investment-experience mb-[35px] mt-[35px] pb-[30px] sm:pb-[37px] xs border-b border-solid border-[#EDDFD0] border-opacity-50'>
                    <div className={`${s.serviceBlock} relative flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
                        <div className='text-[20px]'>Sales</div>
                        <div className='mt-[20px] text-white text-xs leading-[170%]'>
                            <p>Slim Property team of professional agents boast a strategic mindset, powered by a pool of high-end properties — in collaboration with top developers and investors- which allows them to identify the best investment opportunity on your behalf, ensuring that every effort is focused and purposeful. Armed with deep market knowledge, they are able to listen attentively to clients’ needs, tailoring solutions in a way that truly adds value.</p>
                        </div>
                    </div>
                    <div className={`${s.serviceBlock} relative flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
                        <div className='text-[20px]'>Current Services</div>
                        <div className='mt-[20px] text-white text-xs leading-[170%]'>
                            <p>Residential Real Estate Investment Advisory</p>
                            <p>(Primary and Resale)</p>
                            <p>Residential Real Estate Resale</p>
                            <p>Property Management</p>
                            <p>Commercial Real estate leasing and sale</p>
                        </div>
                    </div>
                    <div className={`flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
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
