import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import Layout from '@/components/Layout'
import React from 'react'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <HowWeWork />
    </Layout>
  )
}
