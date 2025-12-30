import '../styles/globals.css';
import type { Metadata } from 'next';

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
