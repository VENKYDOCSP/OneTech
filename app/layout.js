import './globals.css'
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'OneTech',
  description: 'Our First Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
