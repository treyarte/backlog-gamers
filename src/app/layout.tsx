import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './styles/globals.css'
import Nav from './components/navigation/nav'
import { auth } from '@/auth'
import Providers from './components/utils/Providers'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `Backlog Gamers | %s`,
    default: 'Backlog Gamers'
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
    title: 'Backlog Gamers',
    description: '',
    url: 'https://backloggamers.com',
    siteName: 'Backlog Gamers',
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
    title: 'Backlog Gamers',
    description: '',
    siteId: '',
    creator: '@BacklogXGamers',
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
          <header className='w-full fixed'>
            <Nav session={session}/>
          </header>
          <main className='main-container'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
