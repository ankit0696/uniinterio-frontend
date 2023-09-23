import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

// Each project in our portfolio tells a story – a story of collaboration, vision, and meticulous attention to detail. From elegant residential interiors to dynamic commercial spaces, our diverse portfolio reflects our commitment to elevating environments and enhancing lifestyles.

// Discover the artistry behind our work, explore the beauty of each design, and envision the possibilities for your own space. Whether you're seeking inspiration for your next project or eager to see the remarkable transformations we've achieved, our portfolio is a testament to the transformative power of interior design.


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Uni Interio</title>
        <meta
          name="description"
          content="Explore Our Interior Design Portfolio"
        />

      </Head>
      <SimpleLayout
        title="Explore Our Interior Design Portfolio"
        intro="Welcome to our Interior Design Portfolio, where creativity meets functionality, and dreams become reality. Dive into a world of inspiring transformations and innovative designs that showcase our expertise in crafting unique and personalized living spaces."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >

        </ul>
      </SimpleLayout>
    </>
  )
}
