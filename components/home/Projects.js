/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import ProjectSlider from './ProjectSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Projects() {
  return (
    <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-rose-900'>
                  Our Recent Projects
                </h2>
                <ul className='mt-4 text-lg text-gray-500'>
                  {/* line below each item */}
                  <li className='mt-2'>
                    Our team of interior designers create best design for you
                    spaces using the cutting-edge technologies and their huge
                    experience in the industry.
                  </li>

                  <li className='mt-4'>
                    100% online - Everything from planning, to 3D to rendering
                    till execution is updated on our servers for you keep track
                    of your projects and get notified when they are completed.
                  </li>
                </ul>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <ProjectSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
