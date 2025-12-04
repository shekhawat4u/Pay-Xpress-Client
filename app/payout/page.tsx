"use client";

import React, { useEffect } from "react";

const Payout = () => {
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
          <h1 className="text-5xl font-bold text-orange-600 mb-4">Payout Solutions</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Distribute payments to employees, vendors, and customers instantly across multiple channels.
          </p>
        </div>

        {/* IMAGE + CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              alt="Payout banner"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              Send money instantly to anyone, anywhere
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Streamline your payment distribution with bulk payouts to bank accounts, wallets, and more across India.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Bulk payout support</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="font-medium">24/7 payout processing</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Enterprise-grade security</span>
              </li>
            </ul>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Sending Payouts →
            </button>
          </div>
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Why businesses choose Pay Xpress Payouts?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.75A2.75 2.75 0 003 4.25v11.5A2.75 2.75 0 005.75 18.5h8.5a2.75 2.75 0 002.75-2.75V6.5m-13-3h10m-10 5h10m-10 5h10"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Bulk Upload</h5>
            <p className="text-gray-600">CSV/Excel bulk payout processing.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v6h1a1 1 0 110-2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H8v1a1 1 0 11-2 0v-1H4a2 2 0 01-2-2V8H1a1 1 0 110-2h1V4a2 2 0 012-2h2V2zM4 4v10a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Bank & Wallet</h5>
            <p className="text-gray-600">Send to bank accounts & wallets.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-ornage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Instant Delivery</h5>
            <p className="text-gray-600">Money reaches in minutes, not days.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.08A3.067 3.067 0 005.158 5.5a3.067 3.067 0 011.109-2.045zM12.935 9.5a1.466 1.466 0 10-2.932 0 1.466 1.466 0 002.932 0zM12.933 15.39c1.155-1.6 1.5-3.053 1.5-4.89 0-.665-.115-1.274-.315-1.841A3.477 3.477 0 0016.5 9.75c.823 0 1.573.36 2.08.748.135.163.263.315.382.458A3.5 3.5 0 0015.75 16.75c-.727 0-1.399-.202-1.987-.556.163.001.326.002.488.002.339 0 .664-.012.976-.03-.11.164-.227.328-.35.486z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Customer Support</h5>
            <p className="text-gray-600">Dedicated support for payouts.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 01.894.553l1.659 3.318 3.659.532a1 1 0 01.587 1.706l-2.675 2.606.631 3.654a1 1 0 01-1.507 1.055L10 13.601l-3.268 1.719a1 1 0 01-1.507-1.055l.631-3.654L2.2 8.109a1 1 0 01.587-1.706l3.659-.532L9.106 2.553A1 1 0 0110 2m0 2.071l-1.243 2.487a1 1 0 01-.756.549l-2.746.399 1.985 1.933a1 1 0 01.288 1.113l-.468 2.73 2.447-1.286a1 1 0 011.116 0l2.447 1.286-.468-2.73a1 1 0 01.288-1.113l1.985-1.933-2.746-.399a1 1 0 01-.756-.549L10 4.071z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Top-Rated</h5>
            <p className="text-gray-600">Trusted by 50000+ businesses.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-2">Compliant</h5>
            <p className="text-gray-600">RBI compliant payout service.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Payout;