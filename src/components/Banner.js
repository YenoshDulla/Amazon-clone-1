import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function Banner() {
  return (
    <div className='relative'>
        <div className="absolute w-full h-30  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
        <Carousel
        autoPlay
        autoFocus
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img load="lazy" src="https://links.papareact.com/gi1" alt="hi" />
            </div>
            <div>
                <img load="lazy" src="https://links.papareact.com/7ma" alt="helo" />
            </div>
            <div>
                <img load="lazy" src="https://links.papareact.com/6ff" alt="please" />
            </div>
        </Carousel>
    </div>
  )
}
