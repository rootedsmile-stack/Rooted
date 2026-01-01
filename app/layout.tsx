// app/layout.tsx
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CouponPanel from '@/components/CouponPanel'

export const metadata = {
  title: 'Rooted Smile - Natural Herbal Tooth Powder',
  description: 'Discover the power of nature with our premium herbal tooth powder. Made with traditional Ayurvedic ingredients for a healthier, brighter smile.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <CouponPanel />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
