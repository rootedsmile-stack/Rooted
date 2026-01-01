// app/shop/page.tsx
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { FloatingCard } from '@/components/FloatingCard'

const products = [
  {
    id: 'classic-blend',
    name: 'Classic Herbal Blend',
    subtitle: 'Daily Care Formula',
    price: 24.99,
    subscribePrice: 19.99,
    description: 'Our signature blend with neem, clove, and cinnamon for complete oral care.',
    badge: 'Bestseller',
  },
  {
    id: 'whitening-blend',
    name: 'Whitening Formula',
    subtitle: 'Brightening Blend',
    price: 29.99,
    subscribePrice: 23.99,
    description: 'Enhanced with activated charcoal and kaolin clay for natural whitening.',
    badge: 'Popular',
  },
  {
    id: 'sensitive-blend',
    name: 'Sensitive Care',
    subtitle: 'Gentle Formula',
    price: 27.99,
    subscribePrice: 22.39,
    description: 'Extra gentle formula with chamomile and aloe for sensitive teeth and gums.',
    badge: null,
  },
  {
    id: 'kids-blend',
    name: 'Kids Natural',
    subtitle: 'Mild Mint Flavor',
    price: 19.99,
    subscribePrice: 15.99,
    description: 'Kid-friendly formula with a mild mint taste they&apos;ll love.',
    badge: 'New',
  },
  {
    id: 'gum-restore',
    name: 'Gum Restore',
    subtitle: 'Intensive Care',
    price: 34.99,
    subscribePrice: 27.99,
    description: 'Concentrated formula with myrrh and tea tree for gum health.',
    badge: null,
  },
  {
    id: 'travel-kit',
    name: 'Travel Kit',
    subtitle: '3-Pack Minis',
    price: 18.99,
    subscribePrice: null,
    description: 'Perfect for on-the-go. Includes Classic, Whitening, and Sensitive.',
    badge: 'Limited',
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Hero Section */}
      <section className="py-20 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Shop Our Collection
              </p>
              <h1 className="text-4xl lg:text-6xl font-light text-stone-100 mb-6 tracking-wide">
                Natural Oral Care
              </h1>
              <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light">
                Discover our range of Ayurvedic herbal tooth powders, each crafted with intention and the finest natural ingredients.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-teal-900/50 border-y border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-stone-400 text-sm">Filter by:</span>
              <button className="px-4 py-2 text-sm text-stone-300 hover:text-gold-400 transition-colors">
                All Products
              </button>
              <button className="px-4 py-2 text-sm text-stone-300 hover:text-gold-400 transition-colors">
                Bestsellers
              </button>
              <button className="px-4 py-2 text-sm text-stone-300 hover:text-gold-400 transition-colors">
                New Arrivals
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-400 text-sm">Sort:</span>
              <select className="bg-teal-800 text-stone-300 text-sm px-3 py-2 border border-teal-700 focus:outline-none focus:border-gold-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeIn key={product.id} direction="up" delay={100 + index * 50}>
                <FloatingCard intensity="subtle" glowColor="teal">
                  <div className="bg-teal-800/50 border border-teal-700 overflow-hidden group">
                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-teal-700/30 to-teal-900/50 flex items-center justify-center relative">
                      {product.badge && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-xs uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                      <div className="text-center">
                        <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-4xl">R</span>
                        </div>
                        <p className="text-gold-400 text-lg tracking-wide">{product.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl text-stone-100 mb-2 tracking-wide">{product.name}</h3>
                      <p className="text-stone-400 text-sm mb-4 font-light">{product.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-2xl text-stone-100">${product.price}</p>
                          {product.subscribePrice && (
                            <p className="text-sm text-gold-400">
                              ${product.subscribePrice} with subscription
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all tracking-wide text-sm uppercase">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe & Save Banner */}
      <section className="py-16 bg-teal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={100}>
            <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Subscribe &amp; Save
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-stone-100 mb-6 tracking-wide">
              Save 20% on Every Order
            </h2>
            <p className="text-lg text-stone-400 mb-8 font-light">
              Never run out of your favorite products. Subscribe and get free shipping plus 20% off every delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-stone-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Flexible delivery</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
