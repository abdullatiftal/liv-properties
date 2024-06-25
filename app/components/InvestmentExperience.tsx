import s from '@/app/ui/main.module.css'
import Link from 'next/link'

export const InvestmentExperience = () => {
    return (
        <div className='flex flex-wrap flex-col sm:flex-row sm:gap-x-[30px] xl:gap-x-[60px] 3xl:gap-x-2 gap-y-[20px] sm:gap-y-14 justify-between xl:justify-normal investment-experience'>
            <div className={`${s.serviceBlock} relative flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
                <h4 className='text-[20px]'>Sales</h4>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <p className='ellipse-text'>Slim Property team of professional agents boast a strategic mindset, powered by a pool of high-end properties — in collaboration with top developers and investors- which allows them to identify the...</p>
                </div>
                <Link href='/services' className='block w-fit'>
                    <div className={`${s.readMore} mt-[5px] pt-[10px] pb-[8px] w-fit text-xs ${s.hoverable}`}>Read More</div>
                </Link>
            </div>
            <div className={`${s.serviceBlock} relative flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
                <h4 className='text-[20px]'>Current Services</h4>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <p>Residential Real Estate Investment Advisory</p>
                    <p>(Primary and Resale)</p>
                    <p>Residential Real Estate Resale</p>
                    <p>Property Management</p>
                    <p>Commercial Real estate leasing and sale</p>
                </div>
            </div>
            <div className={`flex-1 3xl:flex-[auto] 3xl:max-w-[380px]`}>
                <h4 className='text-[20px]'>After Sales</h4>
                <p className='mt-[20px] text-white text-xs leading-[170%] font-[200] ellipse-text'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of ...</p>
                <Link href='/services' className='block w-fit'>
                    <div className={`${s.readMore} mt-[5px] pt-[10px] pb-[8px] w-fit text-xs ${s.hoverable}`}>Read More</div>
                </Link>
            </div>
        </div>
    )
}
