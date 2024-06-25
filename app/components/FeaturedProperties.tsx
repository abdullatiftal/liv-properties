'use client'

import Image from 'next/image'
import '@/app/ui/index.css'
import { PropertyCard } from '@/app/components'
import Link from 'next/link'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect, Fragment } from 'react'
import useSWR from 'swr'
import { apiUrl, fetcher } from '@/app/constants'
import { Property } from '@/app/types'



export const FeaturedProperties = () => {
    const { data: properties, error, isLoading } = useSWR<Property>(apiUrl + '/api/get-featured-properties', fetcher)
    console.log(properties);
    // const properties = data?.data;
    
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [propType, setPropType] = useState<'villas' | 'apartments' | 'all'>('villas')
    const [action, setAction] = useState<'rent' | 'buy' | 'sell'>('buy')

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="small:h-[100vh] flex flex-col px-[3vw] sm:px-0 small:px-[85px] verticalPanelInner featured-properties">
            <div className='flex flex-wrap gap-8 max-[1024px]:justify-between justify-normal items-end'>
                <div className='home-sec_title text-[40px] small:text-[69px] leading-[94%] font-[700]'>
                    <h2>Featured<br />Properties</h2>
                </div>
                {isLargeScreen ? (
                    <div className='text-[12px] sm:mt-0 mt-[39px] sm:mb-[15px] flex-wrap'>
                        <div className='flex'>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'villas' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setPropType('villas')}>Villas</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'apartments' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setPropType('apartments')}>Apartments</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${propType === 'all' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setPropType('all')}>View All</div>
                        </div>
                        <div className='flex mt-[17px]'>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'rent' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setAction('rent')}>Rent</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'buy' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setAction('buy')}>Buy</div>
                            <div className={`border-solid border-[#eddfd0] ${s.prop} ${s.hoverable} ${action === 'sell' ? 'border-b-[3px]' : 'border-b'}`} onClick={() => setAction('sell')}>Sell</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='w-full text-center flex text-sm items-stretch'>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'villas' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setPropType('villas')}>Villas</div>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'apartments' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setPropType('apartments')}>Apartments</div>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${propType === 'all' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setPropType('all')}>View All</div>
                        </div>
                        <div className='w-full text-center flex text-sm'>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'rent' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setAction('rent')}>Rent</div>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'buy' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setAction('buy')}>Buy</div>
                            <div className={`flex-1 pb-[8px] min-w-[100px] sm:min-w-[132px] ${s.prop} ${s.hoverable} ${action === 'sell' ? 'border-b-[3px]' : 'border-b'} border-solid border-[#eddfd0] ${s.hoverable}`} onClick={() => setAction('sell')}>Sell</div>
                        </div>
                    </>
                )}
            </div>
            <div className='grid grid-cols-[repeat(3,1fr)] grid-rows-[1fr] 4xlh:grid-rows-[2fr] 4xlh:grid-y-[40px] featured-properties_grid'>
                {Array.isArray(properties) && properties.slice(0,3).map((p: Property) => (
                    <Fragment key={p.id}>
                        <PropertyCard
                            id={p.id}
                            imageUrl={p.main_image}
                            altText={`Photo of ${p.property_name}`}
                            title={p.property_name}
                            location={p.location}
                            bedrooms={p.number_of_bedroom}
                            bathrooms={p.number_of_bathroom}
                            area={p.area_in_sqft}
                            price={p.price} />
                    </Fragment>
                ))}
                {isLargeScreen ? (
                    <div className='mt-[43px] w-full sm:w-[304px] property-card explore-all'>
                        <div className={`${s.lastProperty}`}>
                            <Image src='/images/property.jpg' alt='Photo of a property' width={304} height={293} className='w-full property-card_img' />
                            <Link href='/projects/ready'>
                                <div className={`${s.backdrop} text-[14px]`}>Explore All</div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <button className='mt-[26px] mx-auto px-[30px] py-[8px] w-[114px] rounded-3xl bg-[#EDDFD0] hover:bg-white/30 text-[#916940] text-sm
                        active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                        View&nbsp;All
                    </button>
                )}
            </div>
        </div>
    )
}
