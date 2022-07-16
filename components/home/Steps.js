import {
  ChevronDoubleUpIcon,
  CogIcon,
  FilmIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import React from 'react'

export default function Steps() {
  const steps = [
    {
      name: 'Consultation',
      desc: `Contact us and we will guide you through a series of questions for us to understand your style and preferences.
        Send a few snaps of the space so we  can get a feel of it. We’ll also need  some measurements to ensure the  furniture we recommend will fit.`,
      icon: PhoneIcon,
    },
    {
      name: 'Configuration',
      desc: `A to-scale furniture layout will be drawn  up for you, showing you what sized  items you can fit and where. You can  tweak the layout to suit you. Once  you’re happy, we’ll start designing.`,
      icon: CogIcon,
    },
    {
      name: 'Conceptualization',
      desc: `A “concept” will be created for you. This  is an indication of where we think the  design should go, highlighting the key  furniture items in the space.`,
      icon: FilmIcon,
    },
    {
      name: 'Setup',
      desc: `Your personalized design is ready! Depending on your package, shopping list, product purchasing and room setup will be done.`,
      icon: ChevronDoubleUpIcon,
    },
  ]
  return (
    <section className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='container mx-auto flex flex-col p-6'>
        <h2 className='text-3xl font-extrabold tracking-tight text-center text-rose-900 pb-2'>
          Steps to beautiful interior
        </h2>

        <div className='divide-y divide-gray-300'>
          {steps.map((step, index) => (
            <div
              key={step.name}
              className='grid justify-center grid-cols-4 p-4 mx-auto space-y-8 lg:space-y-0'
            >
              <div className='flex items-center justify-center lg:col-span-1 col-span-full text-rose-900'>
                <step.icon className='h-8 w-8' />
              </div>
              <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
                <span className='text-xs tracking-wider uppercase text-gray-400'>
                  Step {index + 1}
                </span>
                <span className='text-xl font-bold md:text-2xl text-rose-700'>
                  {step.name}
                </span>
                <span className='mt-4 text-gray-500 text-lg'>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
