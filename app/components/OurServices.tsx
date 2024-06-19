import { InvestmentAdvisory, InvestmentExperience } from '@/app/components'
import '@/app/ui/index.css'

export const OurServices = () => {
    return (
        <div className="max-w-[100%]">
            <div className='gotham'>
                <div className='text-[40px] sm:text-[69px] leading-[94%] font-[700]'>
                    <div>Our Services</div>
                </div>
                <div className='sm:w-[480px] text-[25px] mt-[11px] font-[200] leading-[120%]'>
                    <div>A comprehensive investment experience tailored to high-end needs</div>
                </div>
            </div>
            <InvestmentExperience />
            <InvestmentAdvisory />
        </div>
    )
}