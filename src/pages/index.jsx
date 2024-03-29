import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
  WhatsAppIconDark,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Solutions from '@/components/Solutions'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group -m-1 p-1"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

function Newsletter() {
  const [phone, setPhone] = useState('')
  const toastOptions = {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light',
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        phone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setPhone('')

    if (res.status === 201) {
      toast.success(
        'Thank you for your interest. We will contact you soon.',
        toastOptions
      )
    } else {
      toast.error('Oops!Something went wrong.', toastOptions)
    }
  }

  return (
    <form
      // action="/thank-you"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">
          Have a project in mind? Let&apos;s talk about it.
        </span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        We are here to help you with your project. We will get back to you as
        soon as possible.
      </p>
      <div className="mt-6 flex">
        <input
          type="tel"
          placeholder="Phone number"
          aria-label="Phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-rose-400 dark:focus:ring-rose-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Book free consultation
        </Button>
      </div>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        By clicking the button above, you agree to our{' '}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Uni Interio - Designing Interiors, Inspiring Lifestyles
        </title>
        <meta
          name="description"
          content="Discover exceptional interior design solutions with Uni Interio. We specialize in crafting personalized spaces that reflect your style and aspirations. Explore our portfolio and services today."
        />
        <meta
          name="keywords"
          content="interior design, interior design company, interior design services, interior design company in delhi, interior design company in gurgaon, interior design company in noida, interior design company in faridabad, interior design company in ghaziabad, interior design company in greater noida, interior design company in delhi ncr, interior design company in india, interior design company in mumbai, interior design company in bangalore, interior design company in chennai, interior design company in hyderabad, interior design company in pune, interior design company in kolkata, interior design company in ahmedabad, interior design company in jaipur, interior design company in surat, interior design company in chandigarh, interior design company in lucknow, interior design company in bhopal, interior design company in indore, interior design company in patna, interior design company in vadodara, interior design company in ghaziabad, interior design company in ludhiana"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Unique &amp; Affordable interiors customised for you
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We provide a wide range of interior design and renovation services.
            Unique designs that are designed to fit your needs with
            budget-friendly prices. Our team of experts will help you to create
            your dream home.
          </p>
          {/* Add whatsapp contact button */}
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://wa.me/917654882112"
              aria-label="Follow on Twitter"
              icon={WhatsAppIcon}
              className="hover:scale-110 transform transition"
            />  
          </div>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/uniinterio/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <Solutions />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
