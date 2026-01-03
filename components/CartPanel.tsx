'use client';

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import Image from 'next/image';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items, removeItem, updateQuantity, totalAmount, totalItems } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-zinc-900 shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-zinc-800">
                      <Dialog.Title className="text-xl font-light text-zinc-100">
                        Shopping Cart ({totalItems})
                      </Dialog.Title>
                      <button
                        type="button"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <svg
                            className="w-16 h-16 text-zinc-600 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <p className="text-zinc-400 mb-4">Your cart is empty</p>
                          <button
                            onClick={onClose}
                            className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                              {/* Product Image */}
                              <div className="flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg overflow-hidden">
                                {item.image ? (
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                )}
                              </div>

                              {/* Product Details */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-medium text-zinc-100 mb-1">{item.name}</h3>
                                <p className="text-sm text-teal-400 mb-2">${item.price.toFixed(2)}</p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-2 bg-zinc-800 rounded-lg p-1">
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-zinc-100"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                      </svg>
                                    </button>
                                    <span className="w-8 text-center text-sm text-zinc-100">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="w-6 h-6 flex items-center justify-center hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-zinc-100"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                      </svg>
                                    </button>
                                  </div>

                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>

                              {/* Item Total */}
                              <div className="text-sm font-medium text-zinc-100">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-zinc-800 px-6 py-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between text-lg">
                          <span className="text-zinc-400">Subtotal</span>
                          <span className="font-medium text-zinc-100">${totalAmount.toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <Link
                          href="/checkout"
                          onClick={onClose}
                          className="block w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white text-center rounded-lg font-medium transition-all duration-300"
                        >
                          Proceed to Checkout
                        </Link>

                        {/* Continue Shopping */}
                        <button
                          onClick={onClose}
                          className="block w-full px-6 py-3 bg-transparent hover:bg-zinc-800 border border-zinc-700 text-zinc-100 text-center rounded-lg font-medium transition-all duration-300"
                        >
                          Continue Shopping
                        </button>

                        <p className="text-xs text-center text-zinc-500">
                          Shipping calculated at checkout
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
