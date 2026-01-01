// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We&apos;ll get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Hero Section */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <div className="text-center">
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Get in Touch
              </p>
              <h1 className="text-4xl lg:text-6xl font-light text-stone-100 mb-6 tracking-wide">
                We&apos;d Love to Hear From You
              </h1>
              <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light">
                Have a question about our products? Need help with an order? We&apos;re here to help.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <FadeIn direction="left" delay={100}>
              <div className="bg-teal-800/50 border border-teal-700 p-8">
                <h2 className="text-2xl text-stone-100 mb-6 tracking-wide">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-stone-400 mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-teal-900 border border-teal-700 text-stone-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-stone-400 mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-teal-900 border border-teal-700 text-stone-100 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm text-stone-400 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-teal-900 border border-teal-700 text-stone-100 focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Inquiry</option>
                      <option value="shipping">Shipping &amp; Returns</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-stone-400 mb-2 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-teal-900 border border-teal-700 text-stone-100 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all tracking-widest text-sm uppercase"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl text-stone-100 mb-6 tracking-wide">Other Ways to Reach Us</h2>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Our customer care team is available Monday through Friday, 9am to 5pm EST. We typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      label: 'Email',
                      value: 'hello@rootedsmile.com',
                      link: 'mailto:hello@rootedsmile.com',
                    },
                    {
                      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                      label: 'Phone',
                      value: '1-800-ROOT-SMILE',
                      link: 'tel:1-800-766-8764',
                    },
                    {
                      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                      label: 'Address',
                      value: '123 Natural Way, Portland, OR 97201',
                      link: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 flex-shrink-0 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-stone-500 text-sm uppercase tracking-wider mb-1">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-stone-100 hover:text-gold-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-stone-100">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-teal-700">
                  <p className="text-stone-400 text-sm uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {['instagram', 'facebook', 'twitter', 'youtube'].map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com/rootedsmile`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-teal-800 border border-teal-700 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/50 transition-colors"
                      >
                        <span className="text-stone-400 text-sm capitalize">{social.charAt(0).toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-teal-800/30 border border-teal-700 p-6">
                  <h3 className="text-lg text-stone-100 mb-2">Looking for Quick Answers?</h3>
                  <p className="text-stone-400 font-light mb-4">
                    Check out our FAQ section for answers to common questions about products, shipping, and more.
                  </p>
                  <a href="/faq" className="text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2">
                    View FAQs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  )
}
