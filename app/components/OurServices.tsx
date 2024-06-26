import { InvestmentAdvisory, InvestmentExperience } from '@/app/components';
import '@/app/ui/index.css';

export const OurServices = () => {
    return (
        <div className='verticalPanelInner services flex max-w-[100%] flex-col gap-[30px] px-[3vw] sm:px-0 small:px-[85px]'>
            <div className='home-sec_title'>
                <div className='text-[40px] font-[700] leading-[94%] small:text-[69px]'>
                    <h2>Our Services</h2>
                </div>
                <div className='mt-[11px] text-[25px] font-[200] leading-[120%] small:w-[480px]'>
                    <h3>
                        A comprehensive investment experience tailored to
                        high-end needs
                    </h3>
                </div>
            </div>
            <InvestmentExperience />
            <InvestmentAdvisory />
        </div>
    );
};
