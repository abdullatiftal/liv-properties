import '@/app/ui/index.css';
import { Metadata } from 'next';
import { EnquireForm } from '@/app/components';
import { Careers, Career } from '@/app/types';
import { fetchData, getFieldValueByName } from '@/app/constants';
import CareerCard from '../components/CareerCard';

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

export default async function CareersPage() {
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
            {careerdata.map((career) => (
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
