// app/about/page.tsx
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { FloatingCard } from '@/components/FloatingCard'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Hero Section */}
      <section className="py-24 bg-teal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" delay={100}>
              <div>
                <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                  Our Story
                </p>
                <h1 className="text-4xl lg:text-6xl font-light text-stone-100 mb-8 tracking-wide leading-tight">
                  Rooted in Tradition,
                  <span className="block text-gold-400">Crafted with Care</span>
                </h1>
                <p className="text-xl text-stone-300 leading-relaxed font-light">
                  Rooted Smile was born from a simple belief: nature provides everything we need for optimal oral health. Our journey began with a grandmother&apos;s recipe and evolved into a mission to share the wisdom of Ayurveda with the world.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <FloatingCard intensity="medium" glowColor="gold">
                <div className="aspect-square bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center border border-gold-500/20">
                  <div className="text-center p-10">
                    <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-6xl">R</span>
                    </div>
                    <p className="text-gold-400 text-xl tracking-wide">Est. 2020</p>
                    <p className="text-stone-400 text-sm mt-2 tracking-widest uppercase">Handcrafted with Love</p>
                  </div>
                </div>
              </FloatingCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Our Mission
              </p>
              <h2 className="text-3xl lg:text-5xl font-light text-stone-100 mb-8 tracking-wide">
                Transforming Smiles, Naturally
              </h2>
              <p className="text-xl text-stone-300 leading-relaxed font-light mb-8">
                We believe that oral care should be a ritual, not a chore. Every ingredient in our formulas is carefully selected for its traditional use and modern efficacy. We&apos;re committed to transparency, sustainability, and creating products that truly work.
              </p>
              <div className="w-24 h-px bg-gold-500 mx-auto"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                What We Stand For
              </p>
              <h2 className="text-3xl lg:text-4xl font-light text-stone-100 tracking-wide">
                Our Core Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707', title: 'Purity', desc: '100% natural ingredients, no synthetics, no compromises.' },
              { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', title: 'Sustainability', desc: 'Eco-friendly packaging and ethical sourcing practices.' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Transparency', desc: 'Full ingredient disclosure and third-party testing.' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Community', desc: 'Built by wellness enthusiasts, for wellness enthusiasts.' },
            ].map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={200 + index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl text-stone-100 mb-3 tracking-wide">{value.title}</h3>
                  <p className="text-stone-400 font-light">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Philosophy */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" delay={100}>
              <div>
                <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                  Our Ingredients
                </p>
                <h2 className="text-3xl lg:text-4xl font-light text-stone-100 mb-8 tracking-wide">
                  Ancient Wisdom Meets Modern Science
                </h2>
                <p className="text-lg text-stone-300 leading-relaxed font-light mb-6">
                  Every ingredient in our formulas has been used for centuries in Ayurvedic medicine. We source directly from trusted farmers and verify potency through independent lab testing.
                </p>
                <ul className="space-y-4">
                  {[
                    'Neem - Nature&apos;s antibacterial powerhouse',
                    'Clove - Traditional pain relief and antiseptic',
                    'Cinnamon - Fights bacteria and freshens breath',
                    'Cardamom - Natural breath freshener',
                    'Turmeric - Anti-inflammatory properties',
                  ].map((ingredient, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-300">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-light">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {['Neem', 'Clove', 'Cinnamon', 'Turmeric'].map((item, i) => (
                  <div key={item} className="aspect-square bg-teal-800/50 border border-teal-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <span className="text-gold-400 text-2xl">✦</span>
                      </div>
                      <p className="text-stone-300 tracking-wide">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl lg:text-5xl font-light text-stone-100 mb-8 tracking-wide">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-stone-300 mb-10 font-light">
              Join thousands who have transformed their oral care routine.
            </p>
            <Link 
              href="/shop"
              className="inline-block px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-widest text-sm uppercase"
            >
              Shop Now
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
