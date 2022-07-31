import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
          <div className='relative h-full'>
            <svg
              className='absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='e229dbec-10e9-49ee-8ec3-0286ca089edf'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)'
              />
            </svg>
            <svg
              className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='d2a68204-c383-44b1-b99f-42ccff4e5365'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)'
              />
            </svg>
          </div>
        </div>

        <div className='relative pt-6 pb-16 sm:pb-24'>
          <div className='mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-extrabold text-rose-900 sm:text-5xl md:text-6xl'>
                <span className='block'>Unique Interior For You</span>
                <span className='block text-rose-600'>Hassle Free</span>
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                We provide a wide range of interior design services for your
                space. Unique designs that are designed to
                <span className='text-rose-600'> fit your needs </span>
                with
                <span className='text-rose-600'> budget-friendly </span>
                prices.
              </p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
            <div className='flex-1' />
            <div className='flex-1 w-full bg-rose-900' />
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <Image
              className='relative rounded-lg shadow-lg'
              src='/home/hero.png'
              alt='App screenshot'
              width={2752}
              height={1984}
            />
          </div>
        </div>
      </div>
      <div className='bg-rose-900'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <h2 className='text-center text-rose-200 text-sm font-semibold uppercase tracking-wide'>
            Powered by
          </h2>
          <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4'>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1 text-white'>
              <img
                className='h-12'
                src='/home/logo/startup-india-logo.png'
                alt='Unirchitect'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1 text-white'>
              <img
                className='h-12'
                src='/home/logo/aws-logo.png'
                alt='Unirchitect'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1 text-white'>
              <img
                className='h-12'
                src='/home/logo/uniangle-logo.png'
                alt='Unirchitect'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1 text-white'>
              <img
                className='h-11'
                src='/home/logo/vercel-logo.png'
                alt='Unirchitect'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
