import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import { PropertyCard } from '@/app/components'

export default async function ReadyProjectsPage() {
    return (
        <div className="mb-[83px]">
            <div className='flex flex-wrap gap-8'>
                <div className='gotham text-[40px] sm:text-[69px] leading-[88px] font-[700]'>
                    <div>Ready</div>
                    <div>Projects</div>
                    <Image src='/images/organic-house.webp' alt='Home and a car' width={1404} height={885}
                        className='z-[-30] absolute top-[43%] right-0 translate-y-[-25%] sm:translate-y-[-45%] lg:translate-y-[-60%] max-w-[95vw] sm:max-w-none pointer-events-none' />
                </div>
            </div>
            <div className='text-[12px] mt-[50px]'>
                <div className='flex gap-4 flex-wrap'>
                    <span className={`${s.propFilter}`}>Price Range</span>
                    <span className={`${s.propFilter}`}>Bedroom</span>
                    <span className={`${s.propFilter}`}>Bathroom</span>
                    <span className={`${s.propFilter}`}>Home type</span>
                    <span className={`${s.propFilter} flex justify-between`}>
                        <span>Price low to high</span>
                        <Image src='/icons/expand_more.svg' alt='Arrow down' width={24} height={24} />
                    </span>
                </div>
                <div className='flex mt-[17px] text-center'>
                    <span className={`${s.prop}`}>Rent</span>
                    <span className={`${s.prop} ${s.propActive}`}>Buy</span>
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
