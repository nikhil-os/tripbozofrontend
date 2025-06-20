export const metadata = {
    title: "Terms of Service | tripbozo",
  };
  
  export default function TermsPage() {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 italic">Last updated: June 20, 2025</p>
  
          <p className="text-gray-700">
            By using <strong>https://tripbozo.com</strong> (“Site”), you agree to these Terms of Service (“Terms”).
          </p>
  
          <div>
            <h2 className="text-xl font-bold text-teal-600 mb-2">1. Use of the Site</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Use is limited to personal, non-commercial purposes.</li>
              <li>You must not violate laws, reverse-engineer code, or scrape data.</li>
              <li>No malware or malicious content is allowed.</li>
            </ul>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">2. User‑Generated Content</h2>
            <p className="text-gray-700">
              Any feedback or reviews you submit may be reused by tripbozo. You grant us a perpetual, royalty-free license to use and display your content.
            </p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">3. Ads & Third‑Party Links</h2>
            <p className="text-gray-700">
              We serve ads via Google AdSense and may link to third-party websites. We are not responsible for external content or privacy practices.
            </p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">4. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The Site is provided “as is.” We do not guarantee accuracy, uptime, or suitability for your needs.
            </p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the extent allowed by law, tripbozo is not liable for any direct or indirect damages resulting from your use of the Site.
            </p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">6. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms at any time. Your continued use of the Site implies acceptance of the updated Terms.
            </p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">7. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Any disputes will be settled in the courts of your state or city.
            </p>
          </div>
        </div>
      </main>
    );
  }
  