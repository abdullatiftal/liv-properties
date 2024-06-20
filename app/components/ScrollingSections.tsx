'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Observer } from "gsap/Observer"
import { useGSAP } from '@gsap/react'
import s from '@/app/ui/scrollSection.module.css'
import '@/app/ui/index.css'
import { HomeHero, FeaturedProperties, OurServices, Instagram } from '@/app/components'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(Observer, useGSAP)
}

export const ScrollingSections = () => {
    const verticalSection = useRef(null)
    const sectionsRefs = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        let sections = sectionsRefs.current,
            currentIndex = 0,
            animating = false,
            lastSection = false;
    
        function gotoSection(index: number) {
            if (index < 0 || index >= sections.length) {
                animating = false;
                return;
            }
            animating = true;
            let tl = gsap.timeline({
                defaults: { duration: 0.50, ease: "power1.inOut" },
                onComplete: () => {
                    animating = false;
                }
            });
    
            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(sections[currentIndex], { opacity: 0 });
            }
    
            gsap.set(sections[index], { zIndex: 1 });
            tl.fromTo(sections[index], 
                { opacity: 0 }, 
                { opacity: 1 }
            );
    
            currentIndex = index;
            
            // Control overflow based on section index
            let overflowTimeline = gsap.timeline({ duration: 0.5 });
            if (index === sections.length - 1) {
                overflowTimeline.to("body > div", { overflow: "", height: "auto" });
                if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
                    lastSection = true;
                }
            } else {
                overflowTimeline.to("body > div", { overflow: "hidden", height: "100vh" });
                lastSection = false;
            }
        }
    
        // Create the Observer for scroll handling
        const observer = Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => {
                if (!animating && currentIndex > 0){
                    if(lastSection){
                        gotoSection(currentIndex);
                        lastSection = false;
                    }
                    else{
                        gotoSection(currentIndex - 1);
                    }
                }
            },
            onUp: () => {
                if (!animating && currentIndex < sections.length - 1) {
                    gotoSection(currentIndex + 1);
                }
            },
            tolerance: 10,
            preventDefault: true
        });
    
        gotoSection(0);
    
        return () => {
            observer.kill();
        };
    }, []);
    
    
    return (
        <>
            <div className="verticalSection section flex-col w-full" ref={verticalSection}>
                <div className="verticalPanel"  ref={(el) => (sectionsRefs.current[0] = el!)}>
                    <HomeHero />
                </div>
                <div className="verticalPanel" ref={(el) => (sectionsRefs.current[1] = el!)}>
                    <FeaturedProperties />
                </div>
                <div className="verticalPanel" ref={(el) => (sectionsRefs.current[2] = el!)}>
                    <OurServices />
                </div>
                <div className="verticalPanel" ref={(el) => (sectionsRefs.current[3] = el!)}>
                    <Instagram />
                </div>
            </div>
        </>
    )
}

