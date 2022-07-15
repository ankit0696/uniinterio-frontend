import React from 'react'

export default function HowWeWork() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h3 className='text-xl tracking-tight font-extrabold text-rose-900 sm:text-4xl md:text-3xl py-3'>
          <span className='block'>How we work? See it for yourself</span>
          <span className='block text-rose-600'>Timelapse - Living Area</span>
        </h3>
        <video
          class='min-w-full min-h-full object-cover rounded-xl'
          src='/home/time-lapse.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  )
}
