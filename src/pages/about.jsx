import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/about.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Uni Interio</title>
        <meta
          name="description"
          content="I’m Uni Interio. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Get to Know Uni Interio: Your Partner in Interior Design
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                At Uni Interio, our journey is centered around you. We believe
                that every space we design should be a reflection of your unique
                style, needs, and aspirations. Our client-centric approach forms
                the cornerstone of our design philosophy. We take the time to
                listen and understand your vision, ensuring that every project
                we undertake is a collaborative journey. From the initial
                consultation to the final touches, we prioritize your
                preferences and ideas, working hand in hand to bring your dream
                space to life. Your satisfaction is our ultimate goal, and we&apos;re
                dedicated to crafting interiors that resonate with your
                personality and enhance your lifestyle.
              </p>
              <p>
                Through our design journey at Uni Interio, we&apos;ve had the honor
                of creating success stories that redefine spaces and lifestyles.
                From residential havens to commercial transformations, our
                designs reflect the dreams and aspirations of our clients.
              </p>
              <p>
                At Uni Interio, our team is a harmonious blend of creative minds.
                With expertise ranging from interior design to decoration, we
                collaborate to shape spaces that embody your vision and our
                craftsmanship.
              </p>
              <p>
                Our design philosophy merges beauty and function.
                We shape spaces that blend your vision with our expertise,
                crafting environments that narrate distinct stories and cater to
                practical needs.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/uni_interio/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@uniinterio.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@uniinterio.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
