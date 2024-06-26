import Image from 'next/image';
import { InvestmentAdvisory, Instagram } from '@/app/components';
import '@/app/ui/index.css';
import s from '@/app/ui/main.module.css';

export default async function ServicesPage() {
    return (
        <div className='mx-auto mb-[30px] w-full sm:mb-[60px] xl:mb-[84px] 3xl:max-w-[1200px]'>
            <div className='min-[1630px]:min-w-[1440px] max-[1629px]:w-full relative mb-[82px]'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <h2>
                        Our
                        <br />
                        Services
                    </h2>
                    <div className='pointer-events-none absolute top-[50%] z-[-30] translate-y-[-55%] scale-[1.4] sm:translate-y-[-60%] md:translate-y-[-60%] md:scale-[1.3] lg:scale-[1.3] xl:translate-y-[-70%] 2xl:scale-[1.4]'>
                        <Image
                            src='/images/services_building.webp'
                            alt='Home'
                            width={1404}
                            height={885}
                        />
                    </div>
                </div>
            </div>
            <div className='gotham'>
                <div className='mt-[11px] text-[25px] font-[200] leading-[120%] sm:w-[480px]'>
                    <div>
                        A comprehensive investment experience tailored to
                        high-end needs
                    </div>
                </div>
            </div>
            <div className='mb-[48px] max-w-[100%]'>
                <div className='investment-experience xs mb-[35px] mt-[35px] flex flex-col flex-wrap justify-between gap-y-[20px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[30px] sm:gap-x-[30px] sm:pb-[37px] md:flex-row md:gap-y-14 xl:justify-normal xl:gap-x-[60px] 3xl:gap-x-2'>
                    <div
                        className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
                    >
                        <div className='text-[20px]'>Sales</div>
                        <div className='mt-[20px] text-xs leading-[170%] text-white'>
                            <p>
                                Slim Property team of professional agents boast
                                a strategic mindset, powered by a pool of
                                high-end properties — in collaboration with top
                                developers and investors- which allows them to
                                identify the best investment opportunity on your
                                behalf, ensuring that every effort is focused
                                and purposeful. Armed with deep market
                                knowledge, they are able to listen attentively
                                to clients’ needs, tailoring solutions in a way
                                that truly adds value.
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
                    >
                        <div className='text-[20px]'>Current Services</div>
                        <div className='mt-[20px] text-xs leading-[170%] text-white'>
                            <p>Residential Real Estate Investment Advisory</p>
                            <p>(Primary and Resale)</p>
                            <p>Residential Real Estate Resale</p>
                            <p>Property Management</p>
                            <p>Commercial Real estate leasing and sale</p>
                        </div>
                    </div>
                    <div className={`flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}>
                        <div className='text-[20px]'>After Sales</div>
                        <div className='mt-[20px] text-xs leading-[170%] text-white'>
                            But the efficiency of this remarkable sales team
                            does not end with closing deals. Enter the equally
                            exceptional after sales team – a dedicated group of
                            experts who understand the importance of customer
                            satisfaction beyond the initial transaction. Their
                            commitment to building strong relationships with
                            customers is unwavering, as they strive to provide
                            seamless post- purchase support.
                        </div>
                    </div>
                </div>
                <InvestmentAdvisory />
            </div>
            <Instagram />
        </div>
    );
}
