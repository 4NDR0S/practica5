import React from 'react'

export default function Testimonial({img, testimonial, name, position}) {
  return (
    <div className='flex flex-col items-center text-center mb-16'>
        <img className='w-[75px] rounded-full' src={img} alt="photo" />
        <p className='my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]'>{testimonial}</p>
        <h3 className='font-Fraunces text-[18] text-Very-dark-grayish-blue'>{name}</h3>
        <p className='text-Grayish-blue font-Barlow text-[14px]'>{position}</p>
    </div>
  )
}
