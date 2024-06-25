import { InvestmentAdvisory, InvestmentExperience } from '@/app/components'
import '@/app/ui/index.css'

export const OurServices = () => {
    return (
        <div className="max-w-[100%] flex flex-col px-[3vw] sm:px-0 small:px-[85px] verticalPanelInner services gap-[30px]">
            <div className='home-sec_title'>
                <div className='text-[40px] small:text-[69px] leading-[94%] font-[700]'>
                    <h2>Our Services</h2>
                </div>
                <div className='small:w-[480px] text-[25px] mt-[11px] font-[200] leading-[120%]'>
                    <h3>A comprehensive investment experience tailored to high-end needs</h3>
                </div>
            </div>
            <InvestmentExperience />
            <InvestmentAdvisory />
        </div>
    )
}