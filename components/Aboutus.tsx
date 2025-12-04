import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            About Pay Xpress
          </div>
          <h1 className="text-5xl font-bold text-orange-600 mb-4">
            Empowering Business Payments
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're revolutionizing digital payments with cutting-edge technology, providing seamless, secure, and scalable solutions for businesses of all sizes.
          </p>
        </div>

        {/* How It Works - Process Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-12 h-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Sign Up in Minutes</h5>
                <p className="text-gray-600">Quick onboarding with email or mobile number — start instantly with no delays.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Link Your Bank Securely</h5>
                <p className="text-gray-600">Encrypted & secured banking linking for fast and verified transactions.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">Send & Receive Payments</h5>
                <p className="text-gray-600">Instant money transfers anytime with zero hassle & maximum security.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
            Why Choose Pay Xpress?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive payment solutions designed for modern businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-300">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Add Beneficiary</h4>
              <p className="text-gray-600">Register new payees in minutes with OTP authentication. Safe, quick, and error-free transfers.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">All Payment Modes</h4>
              <p className="text-gray-600">Support for all major methods – UPI, IMPS, NEFT, RTGS. Choose what works best for your business.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-all duration-300">
                <svg className="w-8 h-8 text-green-500 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bulk Transactions</h4>
              <p className="text-gray-600">Efficient payouts processing by uploading a single Excel file. Save time on multiple payments.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-500 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consolidated View</h4>
              <p className="text-gray-600">Manage balances, transactions, mini statements and cash flow—all in a single interface.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all duration-300">
                <svg className="w-8 h-8 text-red-500 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Security</h4>
              <p className="text-gray-600">Industry-leading encryption & authentication protocols ensure your financial data stays protected.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-all duration-300">
                <svg className="w-8 h-8 text-yellow-600 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Instant Settlements</h4>
              <p className="text-gray-600">Lightning-fast payment processing with real-time transaction updates and instant notifications.</p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4">
            Start Smarter Business Finance Today
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses already using Pay Xpress to streamline their payment operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;