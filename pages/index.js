import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import Projects from '@/components/home/Projects'
import Steps from '@/components/home/Steps'
import Layout from '@/components/Layout'
import React from 'react'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <HowWeWork />
      <Projects />
      <Steps />
    </Layout>
  )
}
