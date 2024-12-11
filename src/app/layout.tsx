import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './styles/globals.css'
import Nav from './components/navigation/nav'
import { auth } from '@/auth'
import Providers from './components/utils/Providers'
import NavButtom from './components/navigation/NavButtom'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'


const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? ""; 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

 const metadata: Metadata = {
  title: {
    template: `Feed It Games | %s`,
    default: 'Feed It Games'
  }, 
  description: 'Stay up-to-date on the latest gaming news with an aggregated news feed',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    },
  },
  openGraph: {
    title: 'Feed It Games',
    description: 'Stay up-to-date on the latest gaming news with our aggregated news feed.',
    url: 'https://backloggamers.com',
    siteName: 'Feed It Games',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feed It Games',
    description: 'Stay up-to-date on the latest gaming news with our aggregated news feed.',
    siteId: '',
    creator: '@feeditgames',
    creatorId: '',
    // images: ['https://nextjs.org/og.png'],
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark`}>
        <Providers>
          <header className='w-full fixed top-0 z-40'>
            <Nav session={session}/>
          </header>
          <main className='flex flex-col gap-7'>        
            {children}
          </main>
        </Providers>
      </body>
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  )
}
