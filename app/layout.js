import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'DDust Off Cleaning',
  keywords:
    'dustoffcleaning, ddustoff, cleaning, ddustoffcleaning, ottawa cleaning',
  description:
    "DDust Off Cleaning is a rapidly growing family owned business. We live by the motto &quot;if you're happy, I'm happy&quot; — this is why we offer free in-home consultations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' />
        <meta property='og:image' content='/opengraph-image.png' />
        <meta property='og:title' content='DDust Off Cleaning' />
        <meta property='og:image' content='Cleaning with love.' />
      </head>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
