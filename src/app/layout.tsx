import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export const viewport: Viewport = {
//   themeColor: 'white',
// };

export const metadata: Metadata = {
  title: 'Shivon AI',
  description:
    'Shivon AI is an innovative AI-powered recruitment platform designed to revolutionize the hiring process. Our advanced algorithms analyze vast amounts of data to identify top talent, saving recruiters time and effort. With Shivon AI, you can streamline your hiring process, make data-driven decisions, and find the perfect candidates for your team.',
  manifest: '/site.webmanifest',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: 'https://shivonai.com',
    title: 'Shivon AI',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='font-montserrat scroll-smooth'>
      <body className={`antialiased flex flex-col min-h-screen `}>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
