"use client"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-10 text-orange-500">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-10">

          {/* Section 1 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pay Xpress ("we", "us", "our", or "Company") operates the Pay Xpress website. 
              This page informs you of our policies regarding the collection, use, and disclosure 
              of personal data when you use our Service and the choices you have associated 
              with that data.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              2. Information Collection and Use
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various purposes to 
              provide and improve our Service to you.
            </p>

            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Types of Data Collected:
            </h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Personal Data:</strong> Email address, name, phone number, address, city, state, pincode</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time and date of visits</li>
              <li><strong>Financial Data:</strong> Transaction history and payment method information</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              3. Use of Data
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pay Xpress uses the collected data for various purposes:
            </p>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To process your transactions and send related information</li>
              <li>To provide customer support</li>
              <li>To analyze and improve our Service</li>
              <li>To monitor system performance & usage patterns</li>
              <li>To detect, prevent and address fraud and security issues</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              4. Security of Data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We care about the security of your data. While no method of online transmission 
              is 100% secure, we use industry-best practices to ensure the safety of your 
              personal information.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              5. Encryption and Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use advanced encryption (TLS/SSL) to protect your data in transit. All sensitive 
              information is fully encrypted and handled under PCI DSS security standards.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              6. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy. All updates will be posted here with a revised 
              "Last Updated" date.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              7. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              If you have questions, contact us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Email: support@payxpress.com</li>
              <li>Phone: +91 1800 123 4567</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              8. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Last Updated: December 2025
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}