import React from 'react'

export default function Steps() {
  const steps = [
    {
      name: 'Consultation',
      desc: `Contact us and we will guide you through a series of questions for us to understand your style and preferences.
        Send a few snaps of the space so we  can get a feel of it. We’ll also need  some measurements to ensure the  furniture we recommend will fit.`,
      img: '/home/step-1.png',
    },
    {
      name: 'Configuration',
      desc: `A to-scale furniture layout will be drawn  up for you, showing you what sized  items you can fit and where. You can  tweak the layout to suit you. Once  you’re happy, we’ll start designing.`,
      img: '/home/step-2.png',
    },
    {
      name: 'Conceptualization',
      desc: `A “concept” will be created for you. This  is an indication of where we think the  design should go, highlighting the key  furniture items in the space.`,
      img: '/home/step-3.png',
    },
    {
      name: 'Setup',
      desc: `Your personalized design is ready! Depending on your package, shopping list, product purchasing and room setup will be done.`,
      img: '/home/step-4.png',
    },
  ]
  return (
    <section className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='container mx-auto flex flex-col p-6'>
        <h2 class='text-3xl font-extrabold tracking-tight text-center text-rose-900'>
          Steps to beautiful interior
        </h2>

        <div className='divide-y divide-gray-700'>
          {steps.map((step, index) => (
            <div
              key={step.name}
              className='grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0'
            >
              <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  fill='currentColor'
                  className='w-16 h-16'
                >
                  <path d='M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z'></path>
                  <path d='M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z'></path>
                  <path d='M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z'></path>
                </svg>
              </div>
              <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
                <span className='text-xs tracking-wider uppercase dark:text-violet-400'>
                  Step {index + 1}
                </span>
                <span className='text-xl font-bold md:text-2xl'>
                  {step.name}
                </span>
                <span className='mt-4 dark:text-gray-300'>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
