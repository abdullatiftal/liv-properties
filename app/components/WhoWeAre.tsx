'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InvestmentAdvisory } from '@/app/components';

const tabsState = {
    who: true,
    mission: false,
    vision: false,
    meet: false
};

export const WhoWeAre = () => {
    const [activeTab, setActiveTab] = useState('who');
    return (
        <>
            <div className='mt-[100px] flex flex-wrap text-xs xl:mt-[50px] msm:flex-nowrap mdlap:mt-[136px]'>
                <span
                    className={`w-[93px] border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'who' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('who')}
                >
                    Who&nbsp;we&nbsp;are
                </span>
                <span
                    className={`w-[93px] border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'mission' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('mission')}
                >
                    Mission
                </span>
                <span
                    className={`w-[83px] border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'vision' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('vision')}
                >
                    Vision
                </span>
                <span
                    className={`w-[103px] border-b border-solid border-[#eddfd0] border-opacity-60 py-[10px] text-center ${activeTab === 'meet' ? 'border-b-[4px]' : ''}`}
                    onClick={() => setActiveTab('meet')}
                >
                    Meet&nbsp;the&nbsp;team
                </span>
            </div>
            {/* Who we are */}
            {activeTab === 'who' && (
                <div className='mt-[47px] flex w-full flex-wrap gap-[26px] border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] text-xs'>
                    <div className='lg:w-[calc(50%-13px)]'>
                        <div>
                            LIV Squared Properties was created by an experienced
                            real estate buyer and investor who has been in the
                            regional market for more than 20 years. Slim
                            Property is a boutique agency from a buyers
                            perspective offering a bird’s eye view of the city
                            to provide high- net worth clients with unique
                            investment opportunities that resonate with their
                            sophisticated taste; from urban homes to sprawling
                            estates nestled in serene hideaways, Slim Property
                            supports you in purchasing or investing in the
                            property of your dreams.
                        </div>
                        <div className='mt-[23px]'>
                            Our team of well-trained agents not only possess a
                            profound understanding of the real estate market but
                            also have an innate ability to identify real gems
                            from a buyer’s perspective, guaranteeing investment
                            growth. By adopting a personalized approach while
                            partnering with niche developers in the market, Slim
                            Property provides tailored services to ensure a
                            seamless purchase/re-sale or after sales experience,
                            rooted in in-depth knowledge.
                        </div>
                    </div>
                    <div className='lg:w-[calc(50%-13px)]'>
                        At Slim Property , we understand that investing in
                        property is not just about financial gains. That’s why,
                        we go the extra mile to provide our clients with a
                        hassle free customer-centric journey that ensures
                        comfort from A to Z. Our after sales experience extends
                        far and beyond regular sales to create a long
                        withstanding relationship with our clients where trust
                        and credibility reign supreme.
                    </div>
                </div>
            )}
            {/* Misson & Vision */}
            {(activeTab === 'mission' || activeTab === 'vision') && (
                <div className='mb-[33px] mt-[33px] flex w-full flex-wrap gap-[25px] text-xs'>
                    <div className='lg:w-[calc(50%-13px)]'>
                        <div className='mb-[11px] text-[20px] leading-[120%]'>
                            Mission
                        </div>
                        <div>
                            Providing a comprehensive real estate investment
                            experience that puts unrivaled quality, smart
                            technology and personalized care at its forefront.
                            We support our clients in making informed investment
                            decisions by finding the ideal property that best
                            fits their needs while instilling a strong sense of
                            partnership, thanks to consistency, credibility and
                            extensive market expertise.
                        </div>
                    </div>
                    <div className='lg:w-[calc(50%-13px)]'>
                        <div className='mb-[11px] text-[20px] leading-[120%]'>
                            Vision
                        </div>
                        <div>
                            Becoming the leading boutique real estate agency of
                            choice in the UAE while setting ourselves as a
                            trusted high end luxury property advisor that not
                            only caters to the diverse needs of high net worth
                            clients, but also exceed expectations in every step
                            of the purchase and after-sales cycle
                        </div>
                    </div>
                </div>
            )}
            {(activeTab === 'mission' || activeTab === 'vision') && (
                <InvestmentAdvisory />
            )}
            {/* Meet the team */}
            {activeTab === 'meet' && (
                <div className='mt-[36px]'>
                    <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                        Meet The Team
                    </div>
                    <div className='mt-[47px] flex flex-wrap gap-[14px]'>
                        <div>
                            <Image
                                src='/images/team_member.png'
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                John Doe
                            </div>
                            <div className='text-xs'>CEO & Founder</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                        <div>
                            <Image
                                src='/images/team_member.png'
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                John Doe
                            </div>
                            <div className='text-xs'>CEO & Founder</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                        <div>
                            <Image
                                src='/images/team_member.png'
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                John Doe
                            </div>
                            <div className='text-xs'>CEO & Founder</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                        <div>
                            <Image
                                src='/images/team_member.png'
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                John Doe
                            </div>
                            <div className='text-xs'>CEO & Founder</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                        <div>
                            <Image
                                src='/images/team_member.png'
                                alt='Photo of Tim'
                                width={261}
                                height={319}
                                className='border border-solid border-[#EDDFD0] border-opacity-50'
                            />
                            <div className='mt-[11px] text-[23px] font-[700]'>
                                John Doe
                            </div>
                            <div className='text-xs'>CEO & Founder</div>
                            <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
