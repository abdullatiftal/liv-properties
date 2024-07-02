import '@/app/ui/index.css';
import { Metadata } from 'next';
import { EnquireForm } from '@/app/components';
import { Careers, Career } from '@/app/types';
import { fetchData, fetchGeneral, getFieldValueByName } from '@/app/constants';
import CareerCard from '../components/CareerCard';

const careers: Careers = await fetchData(3);

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: careers.header[0].metatitle,
        description: careers.header[0].metadescription,
        keywords: careers.header[0].metakeyword
    };
}

export default async function CareersPage() {
    const data: Career[] = await fetchGeneral('careers');
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
            {Array.isArray(data) &&
                data.map((career) => (
                    <CareerCard key={career.id} career={career} />
                ))}
            <div className='mt-[30px] w-full text-[40px] font-[700] leading-[38px] lg:mt-[65px] small:text-[69px] small:leading-[88px]'>
                <h2>
                    {getFieldValueByName(
                        careers?.['careers-section-1'],
                        'Form Heading'
                    )}
                </h2>
            </div>
            <EnquireForm />
        </div>
    );
}
