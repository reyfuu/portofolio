import './globals.css';

export const metadata = {
  title: 'Reyfuu — Fullstack Developer Portfolio',
  description: 'Fullstack Developer specializing in React, Vue.js, JavaScript, Express.js, and Laravel. Building modern, scalable web applications.',
  keywords: ['fullstack developer', 'react', 'vue', 'laravel', 'express', 'javascript', 'portfolio'],
  openGraph: {
    title: 'Reyfuu — Fullstack Developer',
    description: 'Building modern web experiences with React, Vue, Express & Laravel',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
