'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import s from '@/app/ui/main.module.css'
import { Suspense } from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { gmapsApiKey } from '@/app/constants'
import Link from 'next/link'

export default function ProjectPage() {
    return (
        <Suspense>
            <ProjectComponent />
        </Suspense>
    )
}

function ProjectComponent() {
    const searchParams = useSearchParams()

    const id = searchParams.get('id')

    // request data

    const data = {
        id: '123testid456',
        imageUrl: '/images/property.jpg',
        bigImageUrl: '/images/prop-close.jpg',
        altText: 'Photo of a property',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        title: 'Canal View Villa',
        location: 'Vezul Residence, Business Bay.',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,273 sqft',
        price: 'AED 1,560.000',
    }

    return (
        <div className='3xl:max-w-[1200px] w-full'>
            <div className='pb-[37px] xl:pb-[0px] w-full flex flex-wrap xl:flex-nowrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50 xl:gap-0 sm:mt-[-50px] xl:mt-0'>
                <div className='flex flex-row xl:flex-col flex-wrap xl:flex-nowrap w-[100%] xl:w-[40%] xl:mr-[-5%] xl:translate-y-[50px] z-[1] order-2 xl:order-1'>
                    <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700] w-[100%] order-1'>
                        <h2>{data.title}</h2>
                    </div>
                    <div className='mt-[10px] text-lg w-[100%] order-2'>
                        {data.location}
                    </div>
                    <div className='mt-[21px] xl:mt-[50px] w-full sm:w-[50%] xl:w-[auto] items-center flex sm:justify-end xl:justify-normal order-4 xl:order-3'>
                        <button className='px-[25px] py-[9px] pl-[15px] grid place-items-center grid-cols-2 gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/share.svg' alt='Share icon' width={29} height={29} />
                            Share
                        </button>
                    </div>
                    <div className='mt-[21px] flex gap-[22px] justify-start items-center text-sm w-full sm:w-[50%] xl:w-[auto] order-3 xl:order-4'>
                        <div>
                            <Image src='/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                            2
                        </div>
                        <div>
                            <Image src='/icons/bathtub.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                            2
                        </div>
                        <div>
                            <Image src='/icons/crop_free.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                            1,273 sqft
                        </div>
                    </div>
                    <div className='mt-[31px] xl:max-w-[483px] max-w-[100%] text-sm leading-[202%] order-5'>
                        {data.description}
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] x-[60%] xl:w-[65%] items-end xl:translate-y-[-100px] order-1 xl:order-2 w-full'>
                    <Image src={data.bigImageUrl} alt={data.altText} width={791} height={490} className='w-full xl:w-[791px]' />
                    <div className='mx-auto xl:ml-auto xl:mr-[175px] max-h-[101px] flex gap-[11px]'>
                        <Image src='/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <Image src='/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <Image src='/images/prop-close-thumb.jpg' alt={data.altText} width={101} height={97} className='max-w-[22%]' />
                        <div className={`${s.viewMorePics} `}>
                            <Image src='/images/prop-close-thumb.jpg' alt='Photo of a property' width={101} height={97} />
                            <div className={`${s.backdrop} text-sm`}>
                                <Image src='/icons/camera.svg' alt='Camera icon' width={24} height={24} />
                                <span>20+ Photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[36px] pb-[46px] w-full flex gap-7 flex-wrap items-center justify-center xl:justify-normal border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='flex flex-wrap gap-[28px] justify-center w-[100%] md:w-[auto]'>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image src='/icons/add_a_photo.svg' alt='Camera icon' width={114} height={114} className='mb-4 p-[30px] md:p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                            Photos
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image src='/icons/floor_lamp.svg' alt='Lamp icon' width={114} height={114} className='mb-4 p-[30px] md:p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                            Floor Plan
                        </Link>
                    </div>
                    <div className='text-center'>
                    <Link href='/'>
                            <Image src='/icons/play_circle.svg' alt='Play circle icon' width={114} height={114} className='mb-4 p-[30px] md:p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                            Video
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image src='/icons/book.svg' alt='Book icon' width={114} height={114} className='mb-4 p-[30px] md:p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                        Brochure
                        </Link>
                    </div>
                </div>
                <div>
                    {/* <button className='pt-[13px] pr-[26px] pb-[17px] pl-[24px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                        Payment Terms
                    </button> */}
                </div>
            </div>
            <div className='mb-[44px] py-[30px] xl:py-[46px] w-full flex flex-wrap gap-[30px] xl:gap-[65px] border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='w-full xl:w-[651px]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={280}
                        width="100%"
                        mode="place"
                        q="1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates"
                    />
                </div>
                <div className='my-auto w-full xl:min-w-[400px] xl:w-[auto]'>
                    <div className='text-[20px] font-[700]'>Current Services</div>
                    <div className='mt-[16px] grid grid-cols-2 text-normal'>
                        <div className='flex items-center'>
                            <Image src='/icons/fire.svg' alt='Fire icon' width={16} height={16} className='mr-[10px] inline' />
                            Fireplace
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/waves.svg' alt='Waves icon' width={16} height={16} className='mr-[10px] inline' />
                            Pool
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/garage.svg' alt='Garage icon' width={16} height={16} className='mr-[10px] inline' />
                            Garage
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/faucet.svg' alt='Faucet icon' width={16} height={16} className='mr-[10px] inline' />
                            Outdoor Kitchen
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/mountains.svg' alt='Mountains icon' width={16} height={16} className='mr-[10px] inline' />
                            Mountain View
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/checkroom.svg' alt='Checkroom icon' width={16} height={16} className='mr-[10px] inline' />
                            Walk in Closet
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/chair.svg' alt='Chair icon' width={16} height={16} className='mr-[10px] inline' />
                            Terrace
                        </div>
                        <div className='flex items-center'>
                            <Image src='/icons/flare.svg' alt='Flare icon' width={16} height={16} className='mr-[10px] inline' />
                            Modern
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
