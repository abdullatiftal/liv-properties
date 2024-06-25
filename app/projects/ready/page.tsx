import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import '@/app/ui/index.css'
import { PropertyCard } from '@/app/components'
import { PageSearch } from '@/app/components'

export default async function ReadyProjectsPage() {
    return (
        <div className="mb-[30px] sm:mb-[60px] small:mb-[83px] 3xl:max-w-[1200px] w-full">
            <div className='flex flex-wrap gap-8'>
                <div className='text-[40px] small:text-[69px] leading-[38px] small:leading-[88px] font-[700]'>
                    <h2>Ready<br/>Projects</h2>
                    <Image src='/images/organic-house.webp' alt='Home and a car' width={1404} height={885}
                        className='z-[-30] absolute top-[140px] sm:top-[200px] lg:top-[340px] right-0 translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] max-w-[95dvw] sm:max-w-full pointer-events-none' />
                </div>
            </div>
            <PageSearch type='ready' />
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
    )
}
