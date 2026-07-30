import React from 'react';
import Link from 'next/link';

export default function Eula() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">End User License Agreement (EULA)</h1>

        <div className="prose prose-pink max-w-none text-gray-600">
          <p className="mb-6">
            This End User License Agreement (this &quot;EULA&quot;) governs your use of the Amber mobile application (the
            &quot;App&quot;). By downloading or using the App, you agree to this EULA.
          </p>

          <p className="mb-6">
            <strong>Last updated:</strong> May 6, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. License</h2>
            <p className="mb-4">
              We grant you a personal, limited, non-exclusive, non-transferable, revocable license to download, install,
              and use the App on Apple-branded products that you own or control, as permitted by the Apple Media Services
              Terms and Conditions and applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Restrictions</h2>
            <p className="mb-4">You agree you will not, and will not enable others to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>copy, modify, or create derivative works of the App except as allowed by law;</li>
              <li>reverse engineer, decompile, or attempt to extract the source code of the App, except where permitted by law;</li>
              <li>rent, lease, sell, sublicense, distribute, or otherwise transfer the App to any third party.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Subscriptions (Auto-Renewable)</h2>
            <p className="mb-4">
              Amber offers auto-renewable subscriptions that provide access to premium features while your subscription is active.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Subscription title:</strong> Amber Premium (may be shown in the App Store as the in-app purchase name)
              </li>
              <li>
                <strong>Subscription length:</strong> Monthly (1 month) and Yearly (12 months)
              </li>
              <li>
                <strong>Price:</strong> The price is shown in the App and in the App Store purchase flow before you confirm purchase,
                and may vary by country/region and currency.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Auto-renewal:</strong> Payment will be charged to your Apple ID account at the confirmation of purchase. Your
              subscription automatically renews unless it is cancelled at least 24 hours before the end of the current period.
              Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>
            <p className="mb-4">
              <strong>Manage or cancel:</strong> You can manage and cancel your subscriptions by going to your App Store account
              settings after purchase.
            </p>
            <p className="mb-4">
              <strong>Free trials (if offered):</strong> If a free trial is offered, any unused portion of the trial will be forfeited
              when you purchase a subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacy</h2>
            <p className="mb-4">
              Your use of the App is also subject to our Privacy Policy. You can read it here:{' '}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Terms of Service</h2>
            <p className="mb-4">
              Additional terms may apply to your use of the service. You can read them here: <Link href="/terms">Terms of Service</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Support</h2>
            <p className="mb-4">
              For support and questions, contact us at <a href="mailto:ceo@emberlightai.com">ceo@emberlightai.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer</h2>
            <p className="mb-4">
              The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. To the maximum extent permitted by law, we
              disclaim all warranties of any kind, whether express, implied, statutory, or otherwise, including implied warranties
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, in no event will we be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses, resulting from your use of (or inability to use) the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes</h2>
            <p className="mb-4">
              We may update this EULA from time to time. If we make changes, we will update the &quot;Last updated&quot; date above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <p className="mb-4">
              Questions about this EULA can be sent to <a href="mailto:ceo@emberlightai.com">ceo@emberlightai.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
