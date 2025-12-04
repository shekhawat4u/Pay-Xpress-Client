"use client";

import React, { useEffect } from "react";

const PayIn = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">Pay-In Solutions</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empower your business to collect online payments instantly with multi-channel payment options.
          </p>
        </div>

        {/* IMAGE + CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
              alt="PayIn banner"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Accept payments from anywhere, anytime
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Customers can pay easily using their preferred payment method — UPI, Debit Card, Net Banking & many more.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">100+ supported payment modes</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Instant payment verification</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">PCI-DSS secured transactions</span>
              </li>
            </ul>

            <button className="bg-orange-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Collecting Payments →
            </button>
          </div>
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Why businesses trust Pay Xpress Pay-In?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">UPI Auto Collect</h5>
            <p className="text-gray-600">Instant QR & UPI request payments.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Payment Links</h5>
            <p className="text-gray-600">Collect payments without a website/app.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd"/>
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">QR & Checkout Page</h5>
            <p className="text-gray-600">Business branded checkout experience.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Cards & Net Banking</h5>
            <p className="text-gray-600">All major banks & cards supported.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Fast Settlements</h5>
            <p className="text-gray-600">Quick settlement frequency for merchants.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Fraud Protection</h5>
            <p className="text-gray-600">AI-driven risk monitoring system.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PayIn;