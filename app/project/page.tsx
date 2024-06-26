'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import s from '@/app/ui/main.module.css';
import { Suspense } from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { gmapsApiKey } from '@/app/constants';
import Link from 'next/link';

export default function ProjectPage() {
    return (
        <Suspense>
            <ProjectComponent />
        </Suspense>
    );
}

function ProjectComponent() {
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    // request data

    const data = {
        id: '123testid456',
        imageUrl: '/images/property.jpg',
        bigImageUrl: '/images/prop-close.jpg',
        altText: 'Photo of a property',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        title: 'Canal View Villa',
        location: 'Vezul Residence, Business Bay.',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,273 sqft',
        price: 'AED 1,560.000'
    };

    return (
        <div className='w-full 3xl:max-w-[1200px]'>
            <div className='flex w-full flex-wrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] sm:mt-[-50px] xl:mt-0 xl:flex-nowrap xl:gap-0 xl:pb-[0px]'>
                <div className='z-[1] order-2 flex w-[100%] flex-row flex-wrap xl:order-1 xl:mr-[-5%] xl:w-[40%] xl:translate-y-[50px] xl:flex-col xl:flex-nowrap'>
                    <div className='order-1 w-[100%] text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                        <h2>{data.title}</h2>
                    </div>
                    <div className='order-2 mt-[10px] w-[100%] text-lg'>
                        {data.location}
                    </div>
                    <div className='order-4 mt-[21px] flex w-full items-center sm:w-[50%] sm:justify-end xl:order-3 xl:mt-[50px] xl:w-[auto] xl:justify-normal'>
                        <button className='grid grid-cols-2 place-items-center gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] px-[25px] py-[9px] pl-[15px] text-sm transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'>
                            <Image
                                src='/icons/share.svg'
                                alt='Share icon'
                                width={29}
                                height={29}
                            />
                            Share
                        </button>
                    </div>
                    <div className='order-3 mt-[21px] flex w-full items-center justify-start gap-[22px] text-sm sm:w-[50%] xl:order-4 xl:w-[auto]'>
                        <div>
                            <Image
                                src='/icons/bed.svg'
                                alt='Bed icon'
                                width={17}
                                height={17}
                                className='mr-[2px] inline'
                            />
                            2
                        </div>
                        <div>
                            <Image
                                src='/icons/bathtub.svg'
                                alt='Bed icon'
                                width={17}
                                height={17}
                                className='mr-[2px] inline'
                            />
                            2
                        </div>
                        <div>
                            <Image
                                src='/icons/crop_free.svg'
                                alt='Bed icon'
                                width={17}
                                height={17}
                                className='mr-[2px] inline'
                            />
                            1,273 sqft
                        </div>
                    </div>
                    <div className='order-5 mt-[31px] max-w-[100%] text-sm leading-[202%] xl:max-w-[483px]'>
                        {data.description}
                    </div>
                </div>
                <div className='x-[60%] order-1 flex w-full flex-col items-end gap-[15px] xl:order-2 xl:w-[65%] xl:translate-y-[-100px]'>
                    <Image
                        src={data.bigImageUrl}
                        alt={data.altText}
                        width={791}
                        height={490}
                        className='w-full xl:w-[791px]'
                    />
                    <div className='mx-auto flex max-h-[101px] gap-[11px] xl:ml-auto xl:mr-[175px]'>
                        <Image
                            src='/images/prop-close-thumb.jpg'
                            alt={data.altText}
                            width={101}
                            height={97}
                            className='max-w-[22%]'
                        />
                        <Image
                            src='/images/prop-close-thumb.jpg'
                            alt={data.altText}
                            width={101}
                            height={97}
                            className='max-w-[22%]'
                        />
                        <Image
                            src='/images/prop-close-thumb.jpg'
                            alt={data.altText}
                            width={101}
                            height={97}
                            className='max-w-[22%]'
                        />
                        <div className={`${s.viewMorePics} `}>
                            <Image
                                src='/images/prop-close-thumb.jpg'
                                alt='Photo of a property'
                                width={101}
                                height={97}
                            />
                            <div className={`${s.backdrop} text-sm`}>
                                <Image
                                    src='/icons/camera.svg'
                                    alt='Camera icon'
                                    width={24}
                                    height={24}
                                />
                                <span>20+ Photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-wrap items-center justify-center gap-7 border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[46px] pt-[36px] xl:justify-normal'>
                <div className='flex w-[100%] flex-wrap justify-center gap-[28px] md:w-[auto]'>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image
                                src='/icons/add_a_photo.svg'
                                alt='Camera icon'
                                width={114}
                                height={114}
                                className='mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]'
                            />
                            Photos
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image
                                src='/icons/floor_lamp.svg'
                                alt='Lamp icon'
                                width={114}
                                height={114}
                                className='mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]'
                            />
                            Floor Plan
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image
                                src='/icons/play_circle.svg'
                                alt='Play circle icon'
                                width={114}
                                height={114}
                                className='mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]'
                            />
                            Video
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link href='/'>
                            <Image
                                src='/icons/book.svg'
                                alt='Book icon'
                                width={114}
                                height={114}
                                className='mb-4 rounded-full border border-solid border-[#EDDFD0] p-[30px] md:p-[41px]'
                            />
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
            <div className='mb-[44px] flex w-full flex-wrap gap-[30px] border-b border-solid border-[#EDDFD0] border-opacity-50 py-[30px] xl:gap-[65px] xl:py-[46px]'>
                <div className='w-full xl:w-[651px]'>
                    <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={280}
                        width='100%'
                        mode='place'
                        q='1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates'
                    />
                </div>
                <div className='my-auto w-full xl:w-[auto] xl:min-w-[400px]'>
                    <div className='text-[20px] font-[700]'>
                        Current Services
                    </div>
                    <div className='text-normal mt-[16px] grid grid-cols-2'>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/fire.svg'
                                alt='Fire icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Fireplace
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/waves.svg'
                                alt='Waves icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Pool
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/garage.svg'
                                alt='Garage icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Garage
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/faucet.svg'
                                alt='Faucet icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Outdoor Kitchen
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/mountains.svg'
                                alt='Mountains icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Mountain View
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/checkroom.svg'
                                alt='Checkroom icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Walk in Closet
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/chair.svg'
                                alt='Chair icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Terrace
                        </div>
                        <div className='flex items-center'>
                            <Image
                                src='/icons/flare.svg'
                                alt='Flare icon'
                                width={16}
                                height={16}
                                className='mr-[10px] inline'
                            />
                            Modern
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
