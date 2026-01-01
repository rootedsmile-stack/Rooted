// app/page.tsx
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { FloatingCard } from '@/components/FloatingCard'

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-teal-800 via-teal-900 to-teal-950">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div>
              <FadeIn direction="up" delay={100}>
                <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-6 font-medium">
                  Ancient Wisdom, Modern Care
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={200}>
                <h1 className="text-5xl lg:text-7xl font-light text-stone-100 mb-8 leading-[1.1] tracking-wide">
                  Nature&apos;s Path to a
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500 font-normal">
                    Radiant Smile
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={300}>
                <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
                  Discover the transformative power of Ayurvedic herbal tooth powder. 
                  Crafted with tradition, proven by science, trusted by thousands.
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/shop"
                    className="px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-widest text-sm uppercase"
                  >
                    Shop Now
                  </Link>
                  <Link 
                    href="/about"
                    className="px-10 py-4 border border-stone-400 text-stone-300 font-medium hover:bg-stone-100/10 hover:border-stone-300 transition-all tracking-widest text-sm uppercase"
                  >
                    Learn More
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: Product Showcase */}
            <FadeIn direction="right" delay={500}>
              <FloatingCard intensity="medium" glowColor="gold">
                <div className="bg-teal-800/50 border border-gold-500/20 p-10 shadow-2xl">
                  <div className="aspect-square w-full max-w-[450px] mx-auto bg-gradient-to-br from-teal-700/30 to-teal-900/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-36 h-36 mx-auto mb-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/30">
                        <span className="text-white font-bold text-6xl">R</span>
                      </div>
                      <p className="text-gold-400 text-xl tracking-wide">Herbal Tooth Powder</p>
                      <p className="text-stone-400 text-sm mt-3 tracking-widest uppercase">100% Natural Ingredients</p>
                      <div className="mt-6 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Why Choose Rooted Smile
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-stone-100 mb-6 tracking-wide">
                The Science of Natural Care
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto font-light">
                Every ingredient carefully selected for maximum effectiveness and purity
              </p>
            </div>
          </FadeIn>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'M5 13l4 4L19 7', title: '100% Natural', desc: 'No chemicals, no artificial additives. Just pure, potent herbs working in harmony with your body.' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Ayurvedic Formula', desc: 'Time-tested ingredients backed by 5,000 years of traditional wisdom and modern research.' },
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Proven Results', desc: 'Join thousands experiencing whiter teeth, healthier gums, and lasting freshness naturally.' },
            ].map((benefit, index) => (
              <FadeIn key={benefit.title} direction="up" delay={200 + index * 100}>
                <FloatingCard intensity="subtle" glowColor="teal">
                  <div className="bg-teal-800/50 border border-teal-700 p-8 h-full">
                    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-stone-100 mb-4 tracking-wide">{benefit.title}</h3>
                    <p className="text-stone-400 leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Product Display */}
            <FadeIn direction="left" delay={100}>
              <FloatingCard intensity="medium" glowColor="gold">
                <div className="aspect-square w-full max-w-[550px] mx-auto bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center border border-gold-500/20">
                  <div className="text-center p-10">
                    <div className="w-44 h-44 mx-auto mb-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/30">
                      <span className="text-white font-bold text-7xl">R</span>
                    </div>
                    <p className="text-gold-400 text-2xl tracking-wide">Premium Blend</p>
                    <p className="text-stone-400 text-sm mt-3 tracking-widest uppercase">Herbal Tooth Powder</p>
                    <div className="mt-6 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </FadeIn>

            {/* Product Details */}
            <div>
              <FadeIn direction="right" delay={200}>
                <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                  Bestseller
                </p>
                <h2 className="text-4xl lg:text-5xl font-light text-stone-100 mb-6 tracking-wide">
                  Premium Herbal Tooth Powder
                </h2>
                <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
                  Our signature blend combines neem, clove, cinnamon, and 12 other 
                  powerful herbs for complete oral care.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={300}>
                <ul className="space-y-4 mb-10">
                  {[
                    'Whitens teeth naturally without harsh chemicals',
                    'Strengthens gums and prevents bleeding',
                    'Long-lasting fresh breath from natural oils',
                    'Reduces sensitivity and protects enamel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-300">
                      <svg className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn direction="right" delay={400}>
                <div className="flex items-center gap-8 mb-10">
                  <div>
                    <p className="text-4xl text-stone-100">$24.99</p>
                    <p className="text-sm text-stone-500 tracking-wide">One-time purchase</p>
                  </div>
                  <div className="h-14 w-px bg-teal-700"></div>
                  <div>
                    <p className="text-4xl text-gold-400">$19.99</p>
                    <p className="text-sm text-stone-500 tracking-wide">Subscribe &amp; save 20%</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={500}>
                <Link 
                  href="/shop"
                  className="inline-block px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-widest text-sm uppercase"
                >
                  Add to Cart
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-100 mb-6 tracking-wide">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto font-light">
                Real results from real people who made the switch to natural
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', initials: 'SM', quote: 'My teeth have never felt cleaner. The natural ingredients really make a difference. No more sensitivity!' },
              { name: 'James L.', initials: 'JL', quote: 'Switched from commercial toothpaste 6 months ago. My dentist noticed the improvement immediately!' },
              { name: 'Maya P.', initials: 'MP', quote: 'Love the natural taste and how fresh my mouth feels all day. Will never go back to regular toothpaste!' },
            ].map((testimonial, index) => (
              <FadeIn key={testimonial.name} direction="up" delay={200 + index * 100}>
                <div className="bg-teal-800/50 border border-teal-700 p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-300 mb-8 italic leading-relaxed font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                      <span className="text-gold-400 font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="text-stone-100 font-medium">{testimonial.name}</p>
                      <p className="text-sm text-stone-500">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-4xl lg:text-6xl font-light text-stone-100 mb-8 tracking-wide">
              Ready to Transform Your Smile?
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <p className="text-xl text-stone-300 mb-12 leading-relaxed font-light">
              Join the natural oral care revolution. Your smile will thank you.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={300}>
            <Link 
              href="/shop"
              className="inline-block px-14 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-widest text-sm uppercase"
            >
              Shop All Products
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
