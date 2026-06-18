import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>PickLog</title>
        <meta name="description" content="Community site to log lockpick attempts, tag lock models, and view leaderboards." />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}