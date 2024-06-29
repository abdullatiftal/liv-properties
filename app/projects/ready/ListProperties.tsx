'use client';

import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAPI } from '@/app/context/APIContext';
import { Property } from '@/app/types';
import { PropertyCard, Loading } from '@/app/components';

const ListProperties = () => {
    const { readyProperties, searchProperty } = useAPI();

    if (searchProperty.data) {
        return (
            <div className='mt-[9px] flex flex-wrap'>
                {searchProperty.isLoading && (
                    <div className='mx-auto inline-block'>
                        <div className='mt-[20px] w-full md:mt-[43px]'>
                            <Loading />
                        </div>
                    </div>
                )}

                {searchProperty.error && (
                    <div className='mt-[20px] w-full md:mt-[43px]'>
                        Error loading featured properties:{' '}
                        {searchProperty.error.message}
                    </div>
                )}

                {!searchProperty.isLoading &&
                    searchProperty.data.total <= 0 && (
                        <div className='mx-auto inline-block'>
                            <div className='w-full md:mt-[43px]'>
                                <p>No results found</p>
                            </div>
                        </div>
                    )}

                {!searchProperty.isLoading &&
                    Array.isArray(searchProperty.data.data) &&
                    searchProperty.data.data
                        .map((p) => (
                            <Fragment key={p.id}>
                                <PropertyCard
                                    id={p.id}
                                    imageUrl={p.main_image}
                                    altText={`Photo of ${p.property_name}`}
                                    title={p.property_name}
                                    location={p.location}
                                    bedrooms={p.number_of_bedroom}
                                    bathrooms={p.number_of_bathroom}
                                    area={p.area_in_sqft}
                                    price={p.price}
                                />
                            </Fragment>
                        ))}
            </div>
        );
    } else {
        return (
            <div className='mt-[9px] flex flex-wrap'>
                {(readyProperties.isLoading || !readyProperties) && (
                    <div className='mx-auto inline-block'>
                        <div className='mt-[20px] w-full md:mt-[43px]'>
                            <Loading />
                        </div>
                    </div>
                )}

                {readyProperties.error && (
                    <div className='mt-[20px] w-full md:mt-[43px]'>
                        Error loading featured properties:{' '}
                        {readyProperties.error.message}
                    </div>
                )}

                {!readyProperties.isLoading &&
                    readyProperties.data &&
                    Array.isArray(readyProperties.data.data) &&
                    readyProperties.data.data.map((p: Property) => (
                        <Fragment key={p.id}>
                            <PropertyCard
                                id={p.id}
                                imageUrl={p.main_image}
                                altText={`Photo of ${p.property_name}`}
                                title={p.property_name}
                                location={p.location}
                                bedrooms={p.number_of_bedroom}
                                bathrooms={p.number_of_bathroom}
                                area={p.area_in_sqft}
                                price={p.price}
                            />
                        </Fragment>
                    ))}
            </div>
        );
    }
};

export default ListProperties;
