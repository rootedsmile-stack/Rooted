// app/layout.tsx
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CouponPanel from '@/components/CouponPanel'
import { CartProvider } from '@/lib/cart-context'

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
      <body className="antialiased">
        <CartProvider>
          {/* Fixed elements */}
          <CouponPanel />
          <Header />
          
          {/* Spacer to push content below fixed header (44px coupon + ~72px header) */}
          <div className="h-[116px]"></div>
          
          {/* Main content */}
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
