'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import s from '@/app/ui/scrollSection.module.css'
import '@/app/ui/index.css'
import { HomeHero, FeaturedProperties, OurServices, Instagram } from '@/app/components'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export const ScrollingSections = () => {
    const horizontalSection = useRef(null)

    useGSAP(
        () => {
            const slides = gsap.utils.toArray('.horizontalPanel')
            gsap.to(slides, {
                xPercent: -108 * (slides.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: horizontalSection.current,
                    pin: true,
                    start: 'bottom bottom',
                    //   snap: 1 / (slides.length - 1),
                    end: '+=300%',
                    scrub: 0.8,
                },
            })
        },
        {
            scope: horizontalSection,
        }
    )

    return (
        <>
            <div className="horizontalSection w-[1400px] section h-[calc(100vh-340px)]" ref={horizontalSection}>
                <div className="horizontalPanel ml-[-200px]">
                    <HomeHero />
                </div>
                <div className="horizontalPanel mt-[-48px] ml-[100px]">
                    <FeaturedProperties />
                </div>
                <div className="horizontalPanel mt-[-48px]">
                    <OurServices />
                </div>
                <div className="horizontalPanel mt-[-48px]">
                    <Instagram />
                </div>
            </div>
        </>
    )
}

