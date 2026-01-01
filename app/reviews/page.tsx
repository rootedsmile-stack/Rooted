// app/reviews/page.tsx
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'

const reviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    location: 'California',
    rating: 5,
    title: 'Life-changing product!',
    review: 'I&apos;ve been using Rooted Smile for 3 months now and my dentist actually commented on how much healthier my gums look. No more bleeding when I floss! The taste took a day to get used to, but now I love it.',
    date: 'December 2024',
    verified: true,
    product: 'Classic Herbal Blend',
  },
  {
    name: 'James L.',
    initials: 'JL',
    location: 'New York',
    rating: 5,
    title: 'Finally found a natural option that works',
    review: 'As someone who&apos;s tried every natural toothpaste on the market, this is the first one that actually delivers results. My teeth feel cleaner than they ever did with commercial toothpaste. Highly recommend!',
    date: 'December 2024',
    verified: true,
    product: 'Whitening Formula',
  },
  {
    name: 'Maya P.',
    initials: 'MP',
    location: 'Texas',
    rating: 5,
    title: 'My whole family uses it now',
    review: 'Started with one jar for myself, now my husband and kids all use it. The kids formula is perfect - mild enough for them but still effective. Love that I&apos;m not exposing my family to harsh chemicals.',
    date: 'November 2024',
    verified: true,
    product: 'Kids Natural',
  },
  {
    name: 'David K.',
    initials: 'DK',
    location: 'Washington',
    rating: 5,
    title: 'Sensitive teeth? Try this!',
    review: 'I&apos;ve struggled with sensitive teeth for years. After switching to Rooted Smile, I can actually eat ice cream again without wincing! It took about 2 weeks to notice the difference, but it&apos;s been amazing.',
    date: 'November 2024',
    verified: true,
    product: 'Sensitive Care',
  },
  {
    name: 'Amanda R.',
    initials: 'AR',
    location: 'Oregon',
    rating: 4,
    title: 'Great product, takes adjustment',
    review: 'The product itself is fantastic and I&apos;ve seen real improvements in my oral health. Just be prepared that it&apos;s different from regular toothpaste - no foam and a unique texture. Once you adjust, you&apos;ll never go back.',
    date: 'October 2024',
    verified: true,
    product: 'Classic Herbal Blend',
  },
  {
    name: 'Michael T.',
    initials: 'MT',
    location: 'Florida',
    rating: 5,
    title: 'Whiter teeth in 2 weeks',
    review: 'I was skeptical about the whitening claims but gave it a shot. After just two weeks of consistent use, I could see a noticeable difference. My morning coffee stains are finally fading. Worth every penny!',
    date: 'October 2024',
    verified: true,
    product: 'Whitening Formula',
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Hero Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Customer Reviews
              </p>
              <h1 className="text-4xl lg:text-6xl font-light text-stone-100 mb-6 tracking-wide">
                Real Results, Real People
              </h1>
              <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light mb-12">
                Join thousands of happy customers who have transformed their oral care routine with Rooted Smile.
              </p>
              
              {/* Overall Rating */}
              <div className="inline-flex items-center gap-6 bg-teal-800/50 border border-teal-700 px-8 py-4">
                <div className="text-center">
                  <p className="text-5xl text-stone-100 font-light">4.9</p>
                  <div className="flex gap-1 mt-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="h-16 w-px bg-teal-700"></div>
                <div className="text-left">
                  <p className="text-2xl text-stone-100">2,847</p>
                  <p className="text-stone-400 text-sm">Verified Reviews</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <FadeIn key={review.name} direction="up" delay={100 + index * 50}>
                <div className="bg-teal-800/50 border border-teal-700 p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-gold-400' : 'text-teal-700'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg text-stone-100 mb-3 font-medium">{review.title}</h3>
                  
                  {/* Review Text */}
                  <p className="text-stone-400 leading-relaxed font-light flex-grow mb-6">
                    &quot;{review.review}&quot;
                  </p>
                  
                  {/* Product Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-teal-900 text-stone-400 text-xs uppercase tracking-wider">
                      {review.product}
                    </span>
                  </div>
                  
                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-teal-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <span className="text-gold-400 font-semibold text-sm">{review.initials}</span>
                      </div>
                      <div>
                        <p className="text-stone-100 text-sm font-medium">{review.name}</p>
                        <p className="text-stone-500 text-xs">{review.location}</p>
                      </div>
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-teal-400 text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Visible Results
              </p>
              <h2 className="text-3xl lg:text-4xl font-light text-stone-100 tracking-wide">
                The Proof is in the Smile
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { stat: '89%', label: 'Reported whiter teeth after 2 weeks' },
                { stat: '94%', label: 'Noticed healthier gums' },
                { stat: '97%', label: 'Would recommend to a friend' },
              ].map((item, i) => (
                <div key={i} className="bg-teal-800/30 border border-teal-700 p-8">
                  <p className="text-5xl text-gold-400 font-light mb-2">{item.stat}</p>
                  <p className="text-stone-400 font-light">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl lg:text-5xl font-light text-stone-100 mb-8 tracking-wide">
              Ready to Join Them?
            </h2>
            <p className="text-xl text-stone-300 mb-10 font-light">
              Try Rooted Smile with our 30-day money-back guarantee.
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
