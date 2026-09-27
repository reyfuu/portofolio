import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0c0c0f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Reyfuu — Code, experiments & things I build',
  description:
    'Projects and experiments by Reyfuu: AI agents, Go APIs, web applications and infrastructure. Browse the repositories and source code.',
  keywords: [
    'Reyfuu',
    'AI Engineer',
    'CrewAI',
    'Golang',
    'NestJS',
    'TypeScript',
    'Kubernetes',
    'Fullstack Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Reyfuu', url: 'https://github.com/reyfuu' }],
  openGraph: {
    title: 'Reyfuu — Code, experiments & things I build',
    description:
      'Explore Reyfuu’s projects in AI agents, Go, web applications and infrastructure.',
    url: 'https://github.com/reyfuu',
    siteName: 'Reyfuu Developer Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/63893194?v=4',
        width: 400,
        height: 400,
        alt: 'Reyfuu GitHub Avatar',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reyfuu — Code, experiments & things I build',
    description:
      'Explore Reyfuu’s projects in AI agents, Go, web applications and infrastructure.',
    images: ['https://avatars.githubusercontent.com/u/63893194?v=4'],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%230c0c0f'/><text x='15' y='68' font-family='monospace' font-size='58' fill='%235eead4'>rf</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-surface-0 text-prose-primary min-h-screen font-sans selection:bg-accent selection:text-surface-0 relative">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
