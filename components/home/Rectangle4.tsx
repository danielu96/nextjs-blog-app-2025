"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { categories } from '@/utils/categories';
import Link from 'next/link';


function Rectangle4({
    category
}: {
    category?: string;

}) {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const image5 = '/images/Frame 5.png';
    const image6 = '/images/Frame 6.png';
    const image7 = '/images/Frame 7.png';
    const image8 = '/images/Frame 8.png';

    const images = [
        '/images/Frame 5.png',
        '/images/Frame 6.png',
        '/images/Frame 7.png',
        '/images/Frame 8.png',
    ]
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
    const scrollNext = () => emblaApi && emblaApi.scrollNext()

    const onSelect = () => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }

    useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi])

    return (
        <div className='CategoriesContainer'>
            <div className='TextKategorie hideOnSmall'>Kategorie</div>

            <div className='embla__dots'>
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`embla__dot ${index === selectedIndex ? 'embla__dot__active' : ''}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
            <div className='embla' ref={emblaRef}>
                <div className='embla__container'>
                    {categories.map((item, index) => {
                        const isActive = item.label === category
                        return (
                            <Link key={index} href={`/?category=${item.label}`} className='embla__slide'>
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    width={340}
                                    height={433}
                                    priority
                                    className={`image ${isActive ? 'border-2 border-red-600 shadow-sm rounded-tl-[60px] rounded-br-[60px] ' : ''}`}
                                />
                            </Link>
                        )
                    })}
                </div>
                <button
                    className='embla__button embla__button__prev'
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <Image
                        src="/images/Stroke 169.png"
                        alt="Prev"
                        width={14}
                        height={26}
                    />
                </button>
                <button
                    className='embla__button embla__button__next'
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <Image
                        src="/images/Stroke 170.png"
                        alt="Next"
                        width={14}
                        height={26}
                    />
                </button>

            </div>
            <div className='frames'>
                {categories.map((item, index) => {
                    const isActive = item.label === category
                    return (
                        <Link
                            key={item.label}
                            href={`/?category=${item.label}`}
                        >
                            <article
                                className={`mt-5 flex flex-col  cursor-pointer duration-300 hover:text-slate-500 ${isActive ? 'border-red-400' : ''}`}

                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    width={366}
                                    height={457}
                                    priority
                                    className={`image ${isActive ? 'border-2 border-red-600 shadow-sm rounded-tl-[60px] rounded-br-[60px] ' : ''}`}
                                />

                            </article>
                        </Link>
                    )
                })}
            </div>

            {/* <div className='frames'>
                <div className='Frame5'>
                    <Image
                        src={image5}
                        width={366}
                        height={457}
                        alt="Wiedza"
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <div className='Frame6'>
                    <Image
                        src={image6}
                        width={366}
                        height={457}
                        alt="Wiedza"
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <div className='Frame7'>
                    <Image
                        src={image7}
                        width={366}
                        height={457}
                        alt="Wiedza"
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <div className='Frame8'>
                    <Image
                        src={image8}
                        width={366}
                        height={457}
                        alt="Wiedza"
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>



            </div> */}

        </div >
    )
}

export default Rectangle4