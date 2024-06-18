import React from 'react'
import Image from './Image'

import milkMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'

import orangeMobile from '../assets/mobile/image-gallery-orange.jpg'
import orangeDesktop from '../assets/desktop/image-gallery-orange.jpg'

import coneMobile from '../assets/mobile/image-gallery-cone.jpg'
import coneDesktop from '../assets/desktop/image-gallery-cone.jpg'

import sugarCubesMobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery() {
    return (
        <div className='grid grid-cols-2 sm:flex'>
            <Image
                imgMobile={milkMobile}
                imgDesktop={milkDesktop}
            />
            <Image
                imgMobile={orangeMobile}
                imgDesktop={orangeDesktop}
            />
            <Image
                imgMobile={coneMobile}
                imgDesktop={coneDesktop}
            />
            <Image
                imgMobile={sugarCubesMobile}
                imgDesktop={sugarCubesDesktop}
            />
        </div>
    )
}
