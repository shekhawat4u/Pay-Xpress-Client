"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      q: "What is Connected Banking?",
      a: "Connected Banking is the seamless integration of your bank's services with a digital platform, allowing you to manage multiple accounts, make instant payments, and access real-time financial data all in one place. It provides enhanced security, faster transactions, and complete visibility of your business finances."
    },
    {
      q: "Can I link multiple current accounts with Pay Xpress?",
      a: "Yes, you can link multiple current accounts with Pay Xpress. Our platform supports unlimited account connections, allowing you to manage all your business accounts from a single dashboard. This helps streamline your payment operations and provides better financial oversight."
    },
    {
      q: "Can I link accounts from different banks?",
      a: "Absolutely! Pay Xpress supports account linking from all major banks in India. You can connect accounts from different banks and manage them seamlessly through our unified platform. This gives you complete flexibility in managing your business finances across multiple banking partners."
    },
    {
      q: "How secure is the Pay Xpress platform?",
      a: "Security is our top priority. Pay Xpress uses bank-grade encryption, PCI-DSS compliance, and multi-factor authentication to ensure your transactions and data are completely secure. We also employ AI-powered fraud detection systems to monitor and prevent suspicious activities in real-time."
    },
    {
      q: "What payment methods are supported?",
      a: "Pay Xpress supports 100+ payment methods including UPI, Net Banking, Debit/Credit Cards, Digital Wallets, and Bank Transfers. This ensures your customers can pay using their preferred method, improving conversion rates and customer satisfaction."
    },
    {
      q: "How fast are the settlements?",
      a: "We offer industry-leading settlement speeds. Depending on your business type and transaction volume, settlements can be processed within T+1 to T+3 days. For premium merchants, we also offer same-day settlement options to improve your cash flow management."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="faq">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            📌 FAQS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our payment solutions and services
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden border-2 ${
                activeIndex === index 
                  ? 'border-orange-500 shadow-lg' 
                  : 'border-transparent hover:border-gray-200'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 flex items-center justify-between group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 pr-4 ${
                  activeIndex === index ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'
                }`}>
                  {item.q}
                </span>
                
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-orange-500 text-white rotate-180' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                }`}>
                  {activeIndex === index ? (
                    <FaMinus className="w-5 h-5" />
                  ) : (
                    <FaPlus className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Contact Support
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;