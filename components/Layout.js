import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({
  title = 'Uni Interio | Best in Interiors ',
  keywords = '',
  description = '',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <div className='overflow-hidden min-h-screen'>
        <Header />
        {/*  Page content */}
        <main className='flex-grow'>{children}</main>
        {/*  Site footer */}
        <Footer />
      </div>
    </>
  )
}
