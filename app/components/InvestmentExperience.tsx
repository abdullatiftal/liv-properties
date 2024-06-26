import s from '@/app/ui/main.module.css';
import Link from 'next/link';

export const InvestmentExperience = () => {
    return (
        <div className='investment-experience flex flex-col flex-wrap justify-between gap-y-[20px] sm:flex-row sm:gap-x-[30px] sm:gap-y-14 xl:justify-normal xl:gap-x-[60px] 3xl:gap-x-2'>
            <div
                className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
            >
                <h4 className='text-[20px]'>Sales</h4>
                <div className='mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    <p className='ellipse-text'>
                        Slim Property team of professional agents boast a
                        strategic mindset, powered by a pool of high-end
                        properties — in collaboration with top developers and
                        investors- which allows them to identify the...
                    </p>
                </div>
                <Link href='/services' className='block w-fit'>
                    <div
                        className={`${s.readMore} mt-[5px] w-fit pb-[8px] pt-[10px] text-xs ${s.hoverable}`}
                    >
                        Read More
                    </div>
                </Link>
            </div>
            <div
                className={`${s.serviceBlock} relative flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}
            >
                <h4 className='text-[20px]'>Current Services</h4>
                <div className='mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    <p>Residential Real Estate Investment Advisory</p>
                    <p>(Primary and Resale)</p>
                    <p>Residential Real Estate Resale</p>
                    <p>Property Management</p>
                    <p>Commercial Real estate leasing and sale</p>
                </div>
            </div>
            <div className={`flex-1 3xl:max-w-[380px] 3xl:flex-[auto]`}>
                <h4 className='text-[20px]'>After Sales</h4>
                <p className='ellipse-text mt-[20px] text-xs font-[200] leading-[170%] text-white'>
                    But the efficiency of this remarkable sales team does not
                    end with closing deals. Enter the equally exceptional after
                    sales team – a dedicated group of experts who understand the
                    importance of ...
                </p>
                <Link href='/services' className='block w-fit'>
                    <div
                        className={`${s.readMore} mt-[5px] w-fit pb-[8px] pt-[10px] text-xs ${s.hoverable}`}
                    >
                        Read More
                    </div>
                </Link>
            </div>
        </div>
    );
};
