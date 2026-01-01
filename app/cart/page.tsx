// app/cart/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'

// This would normally come from a cart context/store
const initialCartItems = [
  {
    id: 'classic-blend',
    name: 'Classic Herbal Blend',
    subtitle: 'Daily Care Formula',
    price: 24.99,
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal >= 50 ? 0 : 5.99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
        <section className="py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn direction="up" delay={100}>
              <div className="w-24 h-24 mx-auto mb-8 bg-teal-800/50 border border-teal-700 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h1 className="text-3xl font-light text-stone-100 mb-4 tracking-wide">Your Cart is Empty</h1>
              <p className="text-stone-400 mb-8 font-light">
                Looks like you haven&apos;t added any products yet. Start shopping to fill your cart with natural goodness!
              </p>
              <Link 
                href="/shop"
                className="inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all tracking-widest text-sm uppercase"
              >
                Browse Products
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      
      {/* Header */}
      <section className="py-16 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={100}>
            <h1 className="text-3xl lg:text-4xl font-light text-stone-100 tracking-wide">
              Shopping Cart
            </h1>
            <p className="text-stone-400 mt-2">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <FadeIn direction="left" delay={100}>
                <div className="bg-teal-800/50 border border-teal-700">
                  {/* Header Row */}
                  <div className="grid grid-cols-12 gap-4 p-4 border-b border-teal-700 text-stone-500 text-sm uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  
                  {/* Cart Items */}
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 p-6 border-b border-teal-700 last:border-b-0 items-center">
                      {/* Product */}
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-teal-700/30 to-teal-900/50 flex items-center justify-center flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-stone-100 font-medium">{item.name}</h3>
                          <p className="text-stone-500 text-sm">{item.subtitle}</p>
                          <button 
                            onClick={() => updateQuantity(item.id, 0)}
                            className="text-stone-500 text-sm hover:text-red-400 transition-colors mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-2 text-center text-stone-300">
                        ${item.price.toFixed(2)}
                      </div>
                      
                      {/* Quantity */}
                      <div className="col-span-2 flex items-center justify-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-teal-700 text-stone-400 hover:border-gold-500 hover:text-gold-400 transition-colors flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-stone-100 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-teal-700 text-stone-400 hover:border-gold-500 hover:text-gold-400 transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Total */}
                      <div className="col-span-2 text-right text-stone-100 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              
              {/* Continue Shopping */}
              <FadeIn direction="up" delay={200}>
                <div className="mt-6">
                  <Link href="/shop" className="text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Order Summary */}
            <div>
              <FadeIn direction="right" delay={100}>
                <div className="bg-teal-800/50 border border-teal-700 p-6 sticky top-32">
                  <h2 className="text-xl text-stone-100 mb-6 tracking-wide">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm text-stone-500 mb-2 uppercase tracking-wider">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-2 bg-teal-900 border border-teal-700 text-stone-100 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                      />
                      <button className="px-4 py-2 border border-teal-700 text-stone-400 hover:border-gold-500 hover:text-gold-400 transition-colors text-sm">
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  {/* Summary Lines */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-teal-700">
                    <div className="flex justify-between text-stone-400">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-teal-400 text-sm">
                        ✓ You qualify for free shipping!
                      </p>
                    )}
                    {shipping > 0 && (
                      <p className="text-stone-500 text-sm">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}
                  </div>
                  
                  {/* Total */}
                  <div className="flex justify-between text-lg text-stone-100 mb-6">
                    <span>Total</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  
                  {/* Checkout Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all tracking-widest text-sm uppercase">
                    Proceed to Checkout
                  </button>
                  
                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-teal-700">
                    <div className="flex items-center justify-center gap-4 text-stone-500 text-xs">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure Checkout
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        30-Day Returns
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
