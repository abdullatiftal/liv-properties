import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import '@/app/ui/index.css'
import { PropertyCard } from '@/app/components'

export default async function UpcomingProjectsPage() {
    return (
        <div className="mb-[83px]">
            <div className='flex flex-wrap gap-8'>
                <div className='gotham text-[40px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Upcoming</div>
                    <div>Projects</div>
                    <Image src='/images/organic-house.webp' alt='Home and a car' width={1404} height={885}
                        className='z-[-30] absolute top-[43%] right-0 translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] max-w-[95vw] sm:max-w-none pointer-events-none' />
                </div>
            </div>
            <div className='text-[12px] mt-[50px]'>
                <div className='flex gap-4 flex-wrap'>
                    <span className={`${s.upcomingSearch} flex justify-between`}>
                        Type Here
                        <Image src='/icons/search.svg' alt='Search icon' width={16} height={16} className='ml-[-20px] inline-block' />
                    </span>
                </div>
            </div>
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
            </div>
        </div>
    )
}
