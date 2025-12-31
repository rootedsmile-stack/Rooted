import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import type { Metadata } from 'next';
import themeConfig from '../config/theme.json';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pure Herbal Tooth Powder | Natural Oral Care',
  description: 'Premium herbal tooth powder crafted with traditional botanical ingredients for your daily oral care routine.',
  keywords: 'herbal tooth powder, natural oral care, botanical toothpaste, eco-friendly dental care',
  openGraph: {
    title: 'Pure Herbal Tooth Powder',
    description: 'Premium herbal tooth powder crafted with traditional botanical ingredients',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate CSS variables from theme.json
  const cssVariables = `
    :root {
      /* Coupon Panel Colors */
      --color-coupon-bg: ${themeConfig.colors.couponPanel.background};
      --color-coupon-text: ${themeConfig.colors.couponPanel.text};
      --color-coupon-accent: ${themeConfig.colors.couponPanel.accent};

      /* Header Colors */
      --color-header-bg: ${themeConfig.colors.header.background};
      --color-header-text: ${themeConfig.colors.header.text};
      --color-header-border: ${themeConfig.colors.header.border};

      /* Body Colors */
      --color-body-bg: ${themeConfig.colors.body.background};
      --color-body-text: ${themeConfig.colors.body.text};
      --color-body-text-light: ${themeConfig.colors.body.textLight};
      --color-body-card-bg: ${themeConfig.colors.body.cardBackground};
      --color-body-border: ${themeConfig.colors.body.border};

      /* Footer Colors */
      --color-footer-bg: ${themeConfig.colors.footer.background};
      --color-footer-text: ${themeConfig.colors.footer.text};
      --color-footer-link-hover: ${themeConfig.colors.footer.linkHover};

      /* Primary Colors */
      --color-primary-main: ${themeConfig.colors.primary.main};
      --color-primary-hover: ${themeConfig.colors.primary.hover};
      --color-primary-light: ${themeConfig.colors.primary.light};
      --color-primary-dark: ${themeConfig.colors.primary.dark};

      /* Secondary Colors */
      --color-secondary-main: ${themeConfig.colors.secondary.main};
      --color-secondary-hover: ${themeConfig.colors.secondary.hover};
      --color-secondary-light: ${themeConfig.colors.secondary.light};
      --color-secondary-dark: ${themeConfig.colors.secondary.dark};

      /* Accent Colors */
      --color-accent-sage: ${themeConfig.colors.accent.sage};
      --color-accent-cream: ${themeConfig.colors.accent.cream};
      --color-accent-terracotta: ${themeConfig.colors.accent.terracotta};
      --color-accent-warm-gray: ${themeConfig.colors.accent.warmGray};

      /* Status Colors */
      --color-status-success: ${themeConfig.colors.status.success};
      --color-status-error: ${themeConfig.colors.status.error};
      --color-status-warning: ${themeConfig.colors.status.warning};
      --color-status-info: ${themeConfig.colors.status.info};

      /* Typography */
      --font-heading: ${inter.style.fontFamily}, ${themeConfig.typography.fontFamily.heading};
      --font-body: ${playfair.style.fontFamily}, ${themeConfig.typography.fontFamily.body};
    }
  `;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
