// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { GlassPanel } from '@/components/GlassPanel'
import { FadeIn } from '@/components/FadeIn'
import { FloatingCard } from '@/components/FloatingCard'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      
      {/* Hero Section - Full Screen Moody Editorial */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Natural herbal ingredients"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div>
              <FadeIn direction="up" delay={100}>
                <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">
                  Ancient Wisdom, Modern Care
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={200}>
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Nature's Path to a
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                    Radiant Smile
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={300}>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Discover the transformative power of Ayurvedic herbal tooth powder. 
                  Crafted with tradition, proven by science, trusted by thousands.
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={400}>
                <div className="flex gap-4">
                  <Button variant="primary" size="lg">
                    Shop Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Product Showcase */}
            <FadeIn direction="right" delay={500}>
              <FloatingCard intensity="medium" glowColor="teal">
                <GlassPanel variant="dark" blur="lg" className="p-8">
                  <Image
                    src="/images/product-hero.png"
                    alt="Rooted Smile Herbal Tooth Powder"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </GlassPanel>
              </FloatingCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section - Editorial Grid */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-20">
              <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">
                Why Choose Rooted Smile
              </p>
              <h2 className="text-5xl font-bold text-white mb-6">
                The Science of Natural Care
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Every ingredient carefully selected for maximum effectiveness and purity
              </p>
            </div>
          </FadeIn>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <FadeIn direction="up" delay={200}>
              <FloatingCard intensity="subtle" glowColor="teal">
                <GlassPanel variant="dark" className="p-8 h-full">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">100% Natural</h3>
                  <p className="text-slate-400 leading-relaxed">
                    No chemicals, no artificial additives. Just pure, potent herbs working in harmony with your body.
                  </p>
                </GlassPanel>
              </FloatingCard>
            </FadeIn>

            {/* Benefit 2 */}
            <FadeIn direction="up" delay={300}>
              <FloatingCard intensity="subtle" glowColor="teal">
                <GlassPanel variant="dark" className="p-8 h-full">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ayurvedic Formula</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Time-tested ingredients backed by 5,000 years of traditional wisdom and modern research.
                  </p>
                </GlassPanel>
              </FloatingCard>
            </FadeIn>

            {/* Benefit 3 */}
            <FadeIn direction="up" delay={400}>
              <FloatingCard intensity="subtle" glowColor="teal">
                <GlassPanel variant="dark" className="p-8 h-full">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Join thousands experiencing whiter teeth, healthier gums, and lasting freshness naturally.
                  </p>
                </GlassPanel>
              </FloatingCard>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-slate-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Product Image */}
            <FadeIn direction="left" delay={100}>
              <FloatingCard intensity="medium" glowColor="gold">
                <div className="relative">
                  <Image
                    src="/images/product-featured.png"
                    alt="Featured Product"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </FloatingCard>
            </FadeIn>

            {/* Product Details */}
            <div>
              <FadeIn direction="right" delay={200}>
                <p className="text-gold-400 text-sm uppercase tracking-widest mb-4">
                  Bestseller
                </p>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Premium Herbal Tooth Powder
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Our signature blend combines neem, clove, cinnamon, and 12 other 
                  powerful herbs for complete oral care. Experience the difference 
                  natural ingredients can make.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={300}>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-300">
                    <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Whitens teeth naturally without harsh chemicals</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strengthens gums and prevents bleeding</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Long-lasting fresh breath from natural oils</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduces sensitivity and protects enamel</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn direction="right" delay={400}>
                <div className="flex items-center gap-6 mb-8">
                  <div>
                    <p className="text-4xl font-bold text-white">$24.99</p>
                    <p className="text-sm text-slate-400">One-time purchase</p>
                  </div>
                  <div className="h-12 w-px bg-slate-700"></div>
                  <div>
                    <p className="text-4xl font-bold text-teal-400">$19.99</p>
                    <p className="text-sm text-slate-400">Subscribe & save 20%</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={500}>
                <Button variant="primary" size="lg">
                  Add to Cart
                </Button>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Real results from real people who made the switch to natural
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <FadeIn direction="up" delay={200}>
              <GlassPanel variant="dark" className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "My teeth have never felt cleaner. The natural ingredients really make a difference. No more sensitivity!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Sarah M.</p>
                    <p className="text-sm text-slate-400">Verified Customer</p>
                  </div>
                </div>
              </GlassPanel>
            </FadeIn>

            {/* Testimonial 2 */}
            <FadeIn direction="up" delay={300}>
              <GlassPanel variant="dark" className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "Switched from commercial toothpaste 6 months ago. My dentist noticed the improvement immediately!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">James L.</p>
                    <p className="text-sm text-slate-400">Verified Customer</p>
                  </div>
                </div>
              </GlassPanel>
            </FadeIn>

            {/* Testimonial 3 */}
            <FadeIn direction="up" delay={400}>
              <GlassPanel variant="dark" className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "Love the natural taste and how fresh my mouth feels all day. Will never go back to regular toothpaste!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">Maya P.</p>
                    <p className="text-sm text-slate-400">Verified Customer</p>
                  </div>
                </div>
              </GlassPanel>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-teal-800/20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Smile?
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join the natural oral care revolution. Your smile will thank you.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={300}>
            <Button variant="primary" size="lg">
              Shop All Products
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
