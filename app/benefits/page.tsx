// app/benefits/page.tsx
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { FloatingCard } from '@/components/FloatingCard'

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Hero Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Why Choose Natural
              </p>
              <h1 className="text-4xl lg:text-6xl font-light text-stone-100 mb-6 tracking-wide">
                The Benefits of Herbal Oral Care
              </h1>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto font-light">
                Discover why thousands are making the switch to natural tooth powder and experiencing healthier smiles.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Natural Whitening',
                desc: 'Our gentle formula removes surface stains without harsh chemicals or abrasives. See visible results in just 2 weeks of regular use.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                stats: '89% saw whiter teeth',
              },
              {
                title: 'Healthier Gums',
                desc: 'Antibacterial herbs like neem and clove work together to reduce inflammation, fight gum disease, and strengthen gum tissue naturally.',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                stats: '94% improved gum health',
              },
              {
                title: 'Fresh Breath',
                desc: 'Natural essential oils provide long-lasting freshness by eliminating odor-causing bacteria at the source, not just masking them.',
                icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                stats: '12+ hours freshness',
              },
              {
                title: 'Reduced Sensitivity',
                desc: 'Gentle, mineral-rich ingredients help remineralize enamel and protect against sensitivity without numbing agents.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                stats: '78% less sensitivity',
              },
            ].map((benefit, index) => (
              <FadeIn key={benefit.title} direction="up" delay={100 + index * 100}>
                <FloatingCard intensity="subtle" glowColor="teal">
                  <div className="bg-teal-800/50 border border-teal-700 p-8 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 flex-shrink-0 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl text-stone-100 mb-3 tracking-wide">{benefit.title}</h3>
                        <p className="text-stone-400 leading-relaxed font-light mb-4">{benefit.desc}</p>
                        <p className="text-gold-400 font-medium">{benefit.stats}</p>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                The Difference
              </p>
              <h2 className="text-3xl lg:text-4xl font-light text-stone-100 tracking-wide">
                Herbal Powder vs. Commercial Toothpaste
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="bg-teal-800/30 border border-teal-700 overflow-hidden">
              <div className="grid grid-cols-3 text-center border-b border-teal-700">
                <div className="p-4 bg-teal-800/50"></div>
                <div className="p-4 bg-gold-500/20 border-x border-teal-700">
                  <p className="text-gold-400 font-medium tracking-wide">Rooted Smile</p>
                </div>
                <div className="p-4 bg-teal-800/50">
                  <p className="text-stone-400">Commercial</p>
                </div>
              </div>
              
              {[
                ['Fluoride-Free', true, false],
                ['100% Natural', true, false],
                ['No SLS/Sulfates', true, false],
                ['Plastic-Free Option', true, false],
                ['Ayurvedic Herbs', true, false],
                ['Cruelty-Free', true, 'Varies'],
                ['Whitening', true, true],
                ['Fresh Breath', true, true],
              ].map(([feature, rooted, commercial], i) => (
                <div key={i} className="grid grid-cols-3 text-center border-b border-teal-700 last:border-b-0">
                  <div className="p-4 text-left">
                    <p className="text-stone-300">{feature}</p>
                  </div>
                  <div className="p-4 border-x border-teal-700 bg-gold-500/5">
                    {rooted === true ? (
                      <svg className="w-6 h-6 mx-auto text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-stone-400">{String(rooted)}</span>
                    )}
                  </div>
                  <div className="p-4">
                    {commercial === true ? (
                      <svg className="w-6 h-6 mx-auto text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : commercial === false ? (
                      <svg className="w-6 h-6 mx-auto text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-stone-400">{String(commercial)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Simple Ritual
              </p>
              <h2 className="text-3xl lg:text-4xl font-light text-stone-100 tracking-wide">
                How to Use Tooth Powder
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Wet Your Brush', desc: 'Dampen your toothbrush with water' },
              { step: '02', title: 'Dip & Tap', desc: 'Dip brush into powder and tap off excess' },
              { step: '03', title: 'Brush Gently', desc: 'Brush for 2 minutes in circular motions' },
              { step: '04', title: 'Rinse & Smile', desc: 'Rinse thoroughly and enjoy your clean smile' },
            ].map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={200 + index * 100}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-teal-800 border border-teal-700 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 text-2xl font-light">{item.step}</span>
                  </div>
                  <h3 className="text-xl text-stone-100 mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-stone-400 font-light">{item.desc}</p>
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
            <h2 className="text-3xl lg:text-5xl font-light text-stone-100 mb-8 tracking-wide">
              Experience the Benefits Yourself
            </h2>
            <p className="text-xl text-stone-300 mb-10 font-light">
              Try Rooted Smile risk-free with our 30-day money-back guarantee.
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
