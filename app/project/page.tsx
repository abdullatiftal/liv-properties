'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import s from '@/app/ui/main.module.css';
import { Suspense, useState } from 'react';
import { gmapsApiKey, apiUrl, fetcher } from '@/app/constants';
import Link from 'next/link';
import useSWR from 'swr';
import { Loading } from '../components';
import renderService from './renderService';
import Gallery from './Gallery';

export default function ProjectPage() {
    return (
        <Suspense>
            <ProjectComponent />
        </Suspense>
    );
}

function ProjectComponent() {
    const [viewGallery, setViewGallery] = useState(false);
    const [shareButton, setShareButton] = useState(false);

    const url = typeof window !== 'undefined' ? window.location.href : '';

    const searchParams = useSearchParams();
    const id = searchParams.get('unique_id');

    if (!id) {
        return (
            <div className='mt-30px min-h-[150px] w-full'>
                No ID found in the URL
            </div>
        );
    }

    const {
        data: property,
        error,
        isLoading
    } = useSWR(`${apiUrl}/api/projectdetails?unique_id=${id}`, fetcher);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!property) {
        return <div>No property found</div>;
    }

    let images = property[0].images ? JSON.parse(property[0].images) : [];
    if (images.length <= 0 && property[0].main_image) {
        images.push(property[0].main_image);
    }
    const maxVisibleImages = 3;

    const services = property[0].services
        ? JSON.parse(property[0].services)
        : [];

    const handlePriceClick = () => {
        setViewGallery((prevCheck) => !prevCheck);
    };

    const handleShare = () => {
        setShareButton((prevCheck) => !prevCheck);
    };

    return (
        <div className='w-full 3xl:max-w-[1200px]'>
            <div className='flex w-full flex-wrap gap-8 border-b border-solid border-[#EDDFD0] border-opacity-50 pb-[37px] sm:mt-[-50px] xl:mt-0 xl:flex-nowrap xl:gap-0 xl:pb-[0px]'>
                <div className='z-[1] order-2 flex w-[100%] flex-row flex-wrap xl:order-1 xl:mr-[-5%] xl:w-[40%] xl:translate-y-[50px] xl:flex-col xl:flex-nowrap'>
                    <div className='order-1 w-[100%] text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                        <h2>{property[0].property_name ?? 'Property Name'}</h2>
                    </div>
                    <div className='order-2 mt-[10px] w-[100%] text-lg'>
                        {property[0].location ?? 'Property Location'}
                    </div>
                    <div className='relative order-4 mt-[40px] flex w-full items-center sm:w-[50%] sm:justify-end xl:order-3 xl:mt-[50px] xl:w-[auto] xl:justify-normal'>
                        <button
                            className='grid grid-cols-2 place-items-center gap-[11px] rounded-3xl border border-solid border-[#EDDFD0] px-[25px] py-[9px] pl-[15px] text-sm transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                            onClick={handleShare}
                        >
                            <Image
                                src='/icons/share.svg'
                                alt='Share icon'
                                width={29}
                                height={29}
                            />
                            Share
                        </button>
                        {shareButton && (
                            <ul
                                className='share_options -top-[35px] right-0 ml-[30px] flex list-none gap-[30px] sm:absolute sm:ml-0 xl:left-0 xl:right-[unset]'
                                data-title='Share'
                            >
                                <li>
                                    <Link
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                        target='_blank'
                                    >
                                        <Image
                                            src='/icons/fb.svg'
                                            alt='Facebook icon'
                                            width={0}
                                            height={0}
                                            className='h-[18px] w-[18px]'
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                                        target='_blank'
                                    >
                                        <Image
                                            src='/icons/x.svg'
                                            alt='X icon'
                                            width={0}
                                            height={0}
                                            className='h-[17px] w-[17px]'
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`https://x.com/intent/tweet?url=${url}`}
                                        target='_blank'
                                    >
                                        <Image
                                            src='/icons/linkedin.svg'
                                            alt='LinkedIn icon'
                                            width={0}
                                            height={0}
                                            className='h-[18px] w-[18px]'
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`https://api.whatsapp.com/send?text=${url}`}
                                        target='_blank'
                                    >
                                        <Image
                                            src='/icons/whatsapp-2.svg'
                                            alt='Whatsapp icon'
                                            width={0}
                                            height={0}
                                            className='h-[20px] w-[20px]'
                                        />
                                    </Link>
                                </li>
                            </ul>
                        )}
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
                            {property[0].number_of_bedroom ?? 0}
                        </div>
                        <div>
                            <Image
                                src='/icons/bathtub.svg'
                                alt='Bed icon'
                                width={17}
                                height={17}
                                className='mr-[2px] inline'
                            />
                            {property[0].number_of_bathroom ?? 0}
                        </div>
                        <div>
                            <Image
                                src='/icons/crop_free.svg'
                                alt='Bed icon'
                                width={17}
                                height={17}
                                className='mr-[2px] inline'
                            />
                            {property[0].area_in_sqft ?? '0'} Sqft
                        </div>
                    </div>
                    <div className='order-5 mt-[31px] max-w-[100%] text-sm leading-[202%] xl:max-w-[483px]'>
                        {property[0].description ?? ''}
                    </div>
                </div>

                {images && (
                    <div className='order-1 flex w-full flex-col items-end gap-[15px] xl:order-2 xl:w-[65%] xl:translate-y-[-100px]'>
                        <Image
                            src={property[0].main_image ?? ''}
                            alt={property[0].property_name ?? 'property image'}
                            width={791}
                            height={490}
                            className='w-full xl:w-[791px] cursor-pointer'
                            priority
                            onClick={handlePriceClick}
                        />
                        <div className='mx-auto flex max-h-[101px] gap-[11px]'>
                            {images
                                .slice(0, maxVisibleImages)
                                .map((image: string, index: string) => (
                                    <div
                                        key={index}
                                        className='h-[100px] w-[100px]'
                                    >
                                        <Image
                                            src={image}
                                            alt={
                                                property[0].property_name ??
                                                'property image'
                                            }
                                            width={0}
                                            height={0}
                                            className='m-1 cursor-pointer w-[100px] h-[100px] object-cover'
                                            sizes='100vw'
                                            onClick={handlePriceClick}
                                        />
                                    </div>
                                ))}
                            {images.length > maxVisibleImages && (
                                <div className={`${s.viewMorePics}`}>
                                    <Image
                                        src={images[3]}
                                        alt={
                                            property[0].property_name ??
                                            'property image'
                                        }
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        className='cursor-pointer w-[100px] h-[100px] object-cover'
                                        onClick={handlePriceClick}
                                    />
                                    <div className={`${s.backdrop} text-sm`}>
                                        <Image
                                            src='/icons/camera.svg'
                                            alt='Camera icon'
                                            width={24}
                                            height={24}
                                            className='cursor-pointer'
                                        />
                                        <span>
                                            {images.length - maxVisibleImages}+
                                            Photos
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {images.length > 0 && viewGallery && (
                    <Gallery stateChanger={handlePriceClick} images={images} />
                )}
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
                        <Link
                            href={property[0].floor_plan ?? '/'}
                            target='_blank'
                        >
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
                        <Link href={property[0].video ?? '/'} target='_blank'>
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
                        <Link
                            href={property[0].brochure ?? '/'}
                            target='_blank'
                        >
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
                {property[0].map && (
                    <div className='w-full xl:w-[651px]'>
                        {/* <GoogleMapsEmbed
                        apiKey={gmapsApiKey}
                        height={280}
                        width='100%'
                        mode='place'
                        q={property[0].location}
                    /> */}

                        <div
                            className='google-map'
                            dangerouslySetInnerHTML={{
                                __html: property[0].map as string
                            }}
                        ></div>
                    </div>
                )}
                <div className='my-auto w-full xl:w-[auto] xl:min-w-[400px]'>
                    <div className='text-[20px] font-[700]'>
                        Current Services
                    </div>
                    <div className='text-normal mt-[16px] grid grid-cols-2'>
                        {services &&
                            services?.map((service: number | string) => {
                                return renderService(service);
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
