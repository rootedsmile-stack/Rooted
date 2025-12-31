// app/layout.tsx
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import themeConfig from '@/config/theme.json'

const inter = Inter({ subsets: ['latin'] })

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
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              /* Accent Colors - Moody Editorial */
              --color-teal: ${themeConfig.colors.accent.teal};
              --color-teal-light: ${themeConfig.colors.accent.tealLight};
              --color-teal-dark: ${themeConfig.colors.accent.tealDark};
              --color-stone: ${themeConfig.colors.accent.stone};
              --color-gold: ${themeConfig.colors.accent.gold};
              --color-charcoal: ${themeConfig.colors.accent.charcoal};
              --color-white: ${themeConfig.colors.accent.white};
              
              /* Glass Effects */
              --color-glass-white: ${themeConfig.colors.accent.glassWhite};
              --color-glass-overlay: ${themeConfig.colors.accent.glassOverlay};
              
              /* Primary Colors */
              --color-primary: ${themeConfig.colors.primary.main};
              --color-primary-hover: ${themeConfig.colors.primary.hover};
              --color-primary-light: ${themeConfig.colors.primary.light};
              --color-primary-dark: ${themeConfig.colors.primary.dark};
              
              /* Secondary Colors */
              --color-secondary: ${themeConfig.colors.secondary.main};
              --color-secondary-hover: ${themeConfig.colors.secondary.hover};
              
              /* Body Colors */
              --color-body-bg: ${themeConfig.colors.body.background};
              --color-body-text: ${themeConfig.colors.body.text};
              --color-body-text-light: ${themeConfig.colors.body.textLight};
              
              /* Header Colors */
              --color-header-bg: ${themeConfig.colors.header.background};
              --color-header-text: ${themeConfig.colors.header.text};
              --color-header-border: ${themeConfig.colors.header.border};
              
              /* Footer Colors */
              --color-footer-bg: ${themeConfig.colors.footer.background};
              --color-footer-text: ${themeConfig.colors.footer.text};
              --color-footer-link-hover: ${themeConfig.colors.footer.linkHover};
              
              /* Coupon Panel Colors */
              --color-coupon-bg: ${themeConfig.colors.couponPanel.background};
              --color-coupon-text: ${themeConfig.colors.couponPanel.text};
              --color-coupon-accent: ${themeConfig.colors.couponPanel.accent};
              
              /* Status Colors */
              --color-success: ${themeConfig.colors.status.success};
              --color-error: ${themeConfig.colors.status.error};
              --color-warning: ${themeConfig.colors.status.warning};
              --color-info: ${themeConfig.colors.status.info};
              
              /* Typography */
              --font-heading: ${themeConfig.typography.fontFamily.heading};
              --font-body: ${themeConfig.typography.fontFamily.body};
            }
            
            body {
              background-color: ${themeConfig.colors.body.background};
              color: ${themeConfig.colors.body.text};
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
