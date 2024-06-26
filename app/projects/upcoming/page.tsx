import Image from 'next/image';
import s from '@/app/ui/main.module.css';
import '@/app/ui/index.css';
import { PropertyCard } from '@/app/components';
import { PageSearch } from '@/app/components';

export default async function UpcomingProjectsPage() {
    return (
        <div className='mb-[30px] w-full sm:mb-[60px] small:mb-[83px] 3xl:max-w-[1200px]'>
            <div className='flex flex-wrap gap-8'>
                <div className='text-[40px] font-[700] leading-[38px] small:text-[69px] small:leading-[88px]'>
                    <div>Upcoming</div>
                    <div>Projects</div>
                    <Image
                        src='/images/organic-house.webp'
                        alt='Home and a car'
                        width={1404}
                        height={885}
                        className='pointer-events-none absolute right-0 top-[140px] z-[-30] max-w-[95dvw] translate-y-[-25%] sm:top-[200px] sm:max-w-full sm:translate-y-[-45%] lg:top-[340px] lg:translate-y-[-60%]'
                    />
                </div>
            </div>
            <PageSearch type='upcoming' />
            <div className='mt-[9px] flex flex-wrap'>
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
                <PropertyCard
                    id={2}
                    imageUrl='/images/property.jpg'
                    altText='Photo of a property'
                    title='Canal View Villa'
                    location='Vezul Residence, Business Bay.'
                    bedrooms={2}
                    bathrooms='2'
                    area='1,273 sqft'
                    price={1560}
                />
            </div>
        </div>
    );
}
