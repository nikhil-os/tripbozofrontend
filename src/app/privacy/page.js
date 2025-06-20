export const metadata = {
    title: "Privacy Policy | TripBozo",
  };
  
  export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 italic">Last updated: June 20, 2025</p>
  
          <p className="text-gray-700">
            TripBozo (“we,” “us,” or “our”) operates <strong>https://tripbozo.com</strong> (the “Site”). This Privacy Policy explains what information we collect, how we use it, and your choices.
          </p>
  
          <div>
            <h2 className="text-xl font-bold text-teal-600 mb-2">1. Information We Collect</h2>
  
            <h3 className="text-lg font-semibold text-gray-800 mt-4">a. Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Email address when you sign up or contact us.</li>
              <li>Any information you voluntarily provide via forms.</li>
            </ul>
  
            <h3 className="text-lg font-semibold text-gray-800 mt-4">b. Automatically Collected Data</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Cookies & Local Storage:</strong> Used to remember your preferences (e.g., selected apps, session ID).</li>
              <li><strong>Analytics:</strong> We use Google Analytics to track site usage (page views, referrals).</li>
            </ul>
  
            <h3 className="text-lg font-semibold text-gray-800 mt-4">c. Ad Networks</h3>
            <p className="text-gray-700">We use Google AdSense to serve ads. Google may set its own cookies. See <a className="text-teal-600 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>To remember your session and selected apps.</li>
              <li>To improve site performance and monitor bugs.</li>
              <li>To serve relevant ads via AdSense.</li>
            </ul>
            <p className="text-gray-700 mt-2">We do <strong>not</strong> sell or rent your personal data to third parties.</p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">3. Your Choices</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>You can disable cookies in your browser settings (some features may stop working).</li>
              <li>To opt out of analytics, install Google&apos;s browser add-on.</li>
            </ul>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">4. Data Retention</h2>
            <p className="text-gray-700">Session data is stored for up to 24 hours in Redis unless manually cleared.</p>
            <p className="text-gray-700 mt-1">Analytics data is retained per our provider&apos;s policy.</p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">5. Security</h2>
            <p className="text-gray-700">All traffic is encrypted using HTTPS (TLS). Redis session storage is securely configured.</p>
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-teal-600 mb-2">6. Changes to This Policy</h2>
            <p className="text-gray-700">We may update this policy from time to time. We&apos;ll update the “Last updated” date accordingly.</p>
          </div>
        </div>
      </main>
    );
  }
 