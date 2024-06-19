import s from '@/app/ui/main.module.css'
import Link from 'next/link'

export const InvestmentExperience = () => {
    return (
        <div className='flex flex-wrap gap-x-2 gap-y-14 mt-[35px]'>
            <div className={`${s.serviceBlock} relative sm:w-[380px]`}>
                <div className='text-[20px]'>Sales</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <div>Slim Property team of professional agents boast a</div>
                    <div>strategic mindset, powered by a pool of high-end</div>
                    <div>properties — in collaboration with top developers and</div>
                    <div>investors- which allows them to identify the...</div>
                </div>
                <Link href='/services' className='block w-fit'>
                    <div className={`${s.readMore} mt-[5px] pt-[10px] pb-[8px] w-fit text-xs ${s.hoverable}`}>Read More</div>
                </Link>
            </div>
            <div className={`${s.serviceBlock} relative sm:w-[380px]`}>
                <div className='text-[20px]'>Current Services</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>
                    <div>Residential Real Estate Investment Advisory</div>
                    <div>(Primary and Resale)</div>
                    <div>Residential Real Estate Resale</div>
                    <div>Property Management</div>
                    <div>Commercial Real estate leasing and sale</div>
                </div>
            </div>
            <div className={`sm:w-[380px]`}>
                <div className='text-[20px]'>After Sales</div>
                <div className='mt-[20px] text-white text-xs leading-[170%] font-[200]'>But the efficiency of this remarkable sales team does not end with closing deals. Enter the equally exceptional after sales team – a dedicated group of experts who understand the importance of ...</div>
                <Link href='/services' className='block w-fit'>
                    <div className={`${s.readMore} mt-[5px] pt-[10px] pb-[8px] w-fit text-xs ${s.hoverable}`}>Read More</div>
                </Link>
            </div>
        </div>
    )
}
