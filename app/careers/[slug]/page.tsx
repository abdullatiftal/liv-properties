// "use client"

import '@/app/ui/index.css';
import { EnquireForm, Loading } from '@/app/components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Career, Careers } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';
import { Metadata } from 'next';

const careers: Careers = await fetchData(3);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: careers.header[0].metatitle,
        description: careers.header[0].metadescription,
        keywords: careers.header[0].metakeyword
    };
}

const careerdata: Career[] = [
    {
        id: 1,
        title: 'Marketing Executive',
        subtitle:
            "We're looking for a mid-level Marketing Executive to join our team.",
        slug: 'marketing-executive',
        description:
            '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>',
        remote: true,
        fulltime: true
    },
    {
        id: 2,
        title: 'Property Consultant',
        subtitle: "We're looking for a Property Consultant to join our team.",
        slug: 'property-consultant',
        description:
            '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>',
        remote: false,
        fulltime: true
    }
];

export async function generateStaticParams() {
    return careerdata.map((career) => ({
        id: career.id,
        title: career.title,
        slug: career.slug,
        description: career.description,
        remote: career.remote,
        fulltime: career.fulltime
    }));
}

export default function CareerDetail({ params }: { params: Career }) {
    const career = careerdata.find((career) => career.slug === params.slug);

    if (!career) {
        return (
            <div className='mt-[20px] w-full md:mt-[43px]'>
                <Loading />
            </div>
        );
    }
    return (
        <div className='mb-[30px] w-full sm:mb-[60px] sm:mt-[-50px] lg:mt-0 xl:mb-[70px] 3xl:max-w-[1200px]'>
            <div
                className='w-full border-b border-solid border-[#eddfd0] border-opacity-60 pb-[30px] text-start text-[40px] font-[700] leading-[38px]
            md:pb-[50px] xl:pb-[79px] small:text-[69px] small:leading-[88px]'
            >
                <h1 className='inline-block max-w-[220px] capitalize small:max-w-[300px]'>
                    {careers?.['careers-section-1'][0].field_value ?? ''}
                </h1>
            </div>
            <div className='mt-[21px] flex flex-wrap justify-between gap-x-[30px] gap-y-[20px] sm:flex-nowrap md:gap-x-[50px] lg:gap-x-[100px]'>
                <div>
                    <h2 className='text-[25px] font-[200]'>{career?.title}</h2>
                    <h4 className='mt-[7px] text-[20px] font-[200]'>
                        {career?.subtitle}
                    </h4>
                    <div className='mt-[38px] flex gap-[15px]'>
                        {career?.remote && (
                            <button
                                className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                            >
                                <Image
                                    src='/icons/location.svg'
                                    alt='Location icon'
                                    width={17}
                                    height={17}
                                />
                                100% Remote
                            </button>
                        )}
                        {career?.fulltime && (
                            <button
                                className='flex items-center gap-[7px] rounded-3xl border border-solid border-[#EDDFD0] px-[16px] pb-[10px] pl-[13px] pt-[10px]
                            text-xs transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700 active:bg-white/60 active:text-black'
                            >
                                <Image
                                    src='/icons/alarm.svg'
                                    alt='Alarm clock icon'
                                    width={17}
                                    height={17}
                                />
                                Full time
                            </button>
                        )}
                    </div>
                    <div
                        className='mt-[10px] text-xs leading-[162%]'
                        dangerouslySetInnerHTML={{
                            __html: career?.description as string
                        }}
                    ></div>
                </div>
                <Link href={`#apply-now`} className='hidden sm:block'>
                    <div
                        className='flex h-fit flex-row items-center rounded-3xl p-2 text-[25px] font-[200] transition duration-200 ease-in-out hover:bg-white/30 hover:text-gray-700
                active:bg-white/60 active:text-black sm:flex-col sm:items-end'
                    >
                        <Image
                            src='/icons/arrow_outward.svg'
                            className='order-2 ml-[20px] w-[30px] sm:order-1 sm:ml-0 sm:w-full'
                            alt='Outward arrow'
                            width={48}
                            height={48}
                        />
                        <span className='order-1 sm:order-2'>Apply</span>
                    </div>
                </Link>
            </div>
            <div
                className='mt-[30px] w-full text-[40px] font-[700] leading-[38px] lg:mt-[65px] small:text-[69px] small:leading-[88px]'
                id='apply-now'
            >
                <h2>
                    {getFieldValueByName(
                        careers?.['careers-section-1'],
                        'Form Heading'
                    )}
                </h2>
            </div>
            <EnquireForm hasUploadField />
        </div>
    );
}
