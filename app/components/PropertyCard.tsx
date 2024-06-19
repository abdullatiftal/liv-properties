'use client'

import Link from 'next/link'
import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface PropertyCardProps {
    id: number
    imageUrl: string | null
    altText: string
    title: string
    description?: string
    location: string
    bedrooms: number
    bathrooms: string
    area: string
    price: number
}

export const PropertyCard = (props: PropertyCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={`${isLargeScreen ? s.propPic : ''} mt-[43px] w-full sm:w-[304px]`}>
            <Link href={`/project?id=${props.id} relative`}>
                <div className='block w-[304px] h-[293px]'>
                    <Image src={props.imageUrl || ''} alt={props.altText} width={304} height={293} onLoadingComplete={() => setImageLoaded(true)}
                        className={`absolute max-[639px]:w-full w-[304px] h-[293px] object-cover transition-opacity ${(!imageLoaded) ? 'opacity-0' : 'opacity-100'}}`} />
                    <Skeleton className={`absolute top-[-5px] transition-opacity ${imageLoaded ? 'opacity-0' : ''}`} width={304} height={293} baseColor='#948270' highlightColor='#baa791' />
                </div>
            </Link>
            <div className='mt-[15px] ml-[10px]'>
                <div className=' text-[15px] font-[700]'>{props.title}</div>
                <div className='text-xs'>{props.location}</div>
                <div className='text-xs'>{props.description}</div>
                <div className='mt-[4px] flex gap-[17px] text-xs'>
                    <div>
                        <Image src='/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.bedrooms}
                    </div>
                    <div>
                        <Image src='/icons/bathtub.svg' alt='Bathtub icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.bathrooms}
                    </div>
                    <div>
                        <Image src='/icons/crop_free.svg' alt='Area icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.area} sqft
                    </div>
                </div>
                <div className='text-[15px] mt-[3px] font-[700]'>AED {props.price.toLocaleString('en-US', { minimumIntegerDigits: 2, maximumFractionDigits: 2 }) + '.000'}</div>
            </div>
        </div>
    )
}
