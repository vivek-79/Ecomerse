
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const Corrosel = () => {

    const totalSlides = 4;
    const [current, setCurrent] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {

        const timeOut = setTimeout(() => {

            if (current === totalSlides - 1) {
                setIsAnimating(false);
                setCurrent(0);
            } else {
                setIsAnimating(true);
                setCurrent((prev) => prev + 1);
            }
        }, 3000)

        return () => clearTimeout(timeOut)
    },[current]);

    return (
        <section className='relative mt-12 w-full h-68 overflow-x-hidden rounded-sm'>

            <div className={`w-full h-full flex overflow-x-visible relative ${isAnimating ? `transition-transform duration-1000 ease-in-out` :''}`}
            
                style={{
                    transform:`translateX(-${current * 100}%)`
                }}
            >

                {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-full relative flex-shrink-0"
                    >
                        <Image
                            src={`/images/corrosel${i + 1}.webp`}
                            alt={`corrosel-pic-${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Corrosel