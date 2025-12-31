// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import themeConfig from '@/theme.json'

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
              /* Primary Brand Colors */
              --color-teal: ${themeConfig.colors.teal};
              --color-teal-light: ${themeConfig.colors.tealLight};
              --color-teal-dark: ${themeConfig.colors.tealDark};
              --color-stone: ${themeConfig.colors.stone};
              --color-gold: ${themeConfig.colors.gold};
              --color-charcoal: ${themeConfig.colors.charcoal};
              --color-white: ${themeConfig.colors.white};
              
              /* Glass Effects */
              --color-glass-white: ${themeConfig.colors.glassWhite};
              --color-glass-overlay: ${themeConfig.colors.glassOverlay};
              
              /* Typography */
              --font-heading: ${themeConfig.typography.fontFamily.heading};
              --font-body: ${themeConfig.typography.fontFamily.body};
              
              /* Spacing */
              --spacing-xs: ${themeConfig.spacing.xs};
              --spacing-sm: ${themeConfig.spacing.sm};
              --spacing-md: ${themeConfig.spacing.md};
              --spacing-lg: ${themeConfig.spacing.lg};
              --spacing-xl: ${themeConfig.spacing.xl};
              
              /* Border Radius */
              --radius-sm: ${themeConfig.borderRadius.sm};
              --radius-md: ${themeConfig.borderRadius.md};
              --radius-lg: ${themeConfig.borderRadius.lg};
              
              /* Shadows */
              --shadow-sm: ${themeConfig.shadows.sm};
              --shadow-md: ${themeConfig.shadows.md};
              --shadow-lg: ${themeConfig.shadows.lg};
            }
            
            body {
              background-color: ${themeConfig.colors.charcoal};
              color: ${themeConfig.colors.white};
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
