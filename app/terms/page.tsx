"use client"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-10 text-orange-500">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert max-w-none space-y-10">

          {/* Section 1 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Pay Xpress, you agree to comply with and be bound by 
              these Terms & Conditions. If you do not agree with any part of these terms, 
              you must discontinue the use of our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              2. Use License
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are granted a limited, non-transferable license to temporarily download 
              one copy of the materials on Pay Xpress for personal and non-commercial use. 
              Under this license, you may not:
            </p>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial or public display purposes</li>
              <li>Attempt to reverse engineer any software provided by Pay Xpress</li>
              <li>Remove copyright or proprietary notices from materials</li>
              <li>Transfer the materials to another server or mirror them elsewhere</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              3. Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All materials on Pay Xpress are provided “as is.” We disclaim all warranties, 
              expressed or implied, including but not limited to merchantability, fitness for 
              a particular purpose, and non-infringement of intellectual property rights.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              4. Limitations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pay Xpress shall not be liable for any damages, including loss of profits, data, 
              or business interruption, arising out of the use or inability to use our services, 
              even if we have been notified of the possibility of such damages.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              5. Accuracy of Materials
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Materials on our platform may contain technical or typographical errors. Pay Xpress 
              does not warrant that any content is accurate or up-to-date. Updates may occur 
              without prior notice.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              6. External Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pay Xpress is not responsible for the content of external sites linked on our 
              website. The inclusion of any link does not imply endorsement. Users access 
              third-party websites at their own risk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              7. Modifications to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pay Xpress may update these Terms & Conditions at any time. Continued use of 
              the service indicates acceptance of the updated terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              8. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of India. By using this website, you consent 
              to the exclusive jurisdiction of Indian courts for any legal disputes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              9. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms & Conditions, reach us at:<br />
              <strong>support@payxpress.com</strong>
            </p>
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