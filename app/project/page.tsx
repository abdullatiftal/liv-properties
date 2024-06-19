'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import s from '@/app/ui/main.module.css'
import { Suspense } from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { gmapsApiKey } from '@/app/constants'

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
        <>
            <div className='pb-[37px] w-full flex flex-wrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='flex flex-col'>
                    <div className='gotham text-[40px] sm:text-[69px] leading-[94%] font-[700]'>
                        <div>{data.title}</div>
                    </div>
                    <div className='mt-[10px] text-lg'>
                        {data.location}
                    </div>
                    <div className='mt-[50px]'>
                        <button className='px-[25px] py-[9px] pl-[15px] grid place-items-center grid-cols-2 gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                            <Image src='/icons/share.svg' alt='Share icon' width={29} height={29} />
                            Share
                        </button>
                    </div>
                    <div className='mt-[21px] flex gap-[22px] text-sm'>
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
                    <div className='mt-[31px] max-w-[483px] text-sm leading-[202%]'>
                        {data.description}
                    </div>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <Image src={data.bigImageUrl} alt={data.altText} width={791} height={490} />
                    <div className='mx-auto max-h-[101px] flex gap-[11px]'>
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
            <div className='pt-[36px] pb-[46px] w-full flex gap-7 flex-wrap items-center justify-between border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='flex flex-wrap gap-[28px]'>
                    <div className='text-center'>
                        <Image src='/icons/add_a_photo.svg' alt='Camera icon' width={114} height={114} className='mb-4 p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                        Photos
                    </div>
                    <div className='text-center'>
                        <Image src='/icons/floor_lamp.svg' alt='Lamp icon' width={114} height={114} className='mb-4 p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                        Floor Plan
                    </div>
                    <div className='text-center'>
                        <Image src='/icons/play_circle.svg' alt='Play circle icon' width={114} height={114} className='mb-4 p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                        Video
                    </div>
                    <div className='text-center'>
                        <Image src='/icons/book.svg' alt='Book icon' width={114} height={114} className='mb-4 p-[41px] rounded-full border border-solid border-[#EDDFD0]' />
                        Brochure
                    </div>
                </div>
                <div>
                    {/* <button className='pt-[13px] pr-[26px] pb-[17px] pl-[24px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30 active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                        Payment Terms
                    </button> */}
                </div>
            </div>
            <div className='mb-[44px] py-[46px] w-full flex flex-wrap gap-[65px] border-b border-solid border-[#EDDFD0] border-opacity-50'>
                <div className='w-full md:w-[651px]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={280}
                        width="100%"
                        mode="place"
                        q="1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates"
                    />
                </div>
                <div className='my-auto'>
                    <div className='text-[20px] font-[700]'>Current Services</div>
                    <div className='mt-[16px] grid grid-cols-2 text-sm'>
                        <div className='flex items-end'>
                            <Image src='/icons/fire.svg' alt='Fire icon' width={16} height={16} className='mr-[10px] inline' />
                            Fireplace
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/waves.svg' alt='Waves icon' width={16} height={16} className='mr-[10px] inline' />
                            Pool
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/garage.svg' alt='Garage icon' width={16} height={16} className='mr-[10px] inline' />
                            Garage
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/faucet.svg' alt='Faucet icon' width={16} height={16} className='mr-[10px] inline' />
                            Outdoor Kitchen
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/mountains.svg' alt='Mountains icon' width={16} height={16} className='mr-[10px] inline' />
                            Mountain View
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/checkroom.svg' alt='Checkroom icon' width={16} height={16} className='mr-[10px] inline' />
                            Walk in Closet
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/chair.svg' alt='Chair icon' width={16} height={16} className='mr-[10px] inline' />
                            Terrace
                        </div>
                        <div className='flex items-end'>
                            <Image src='/icons/flare.svg' alt='Flare icon' width={16} height={16} className='mr-[10px] inline' />
                            Modern
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
